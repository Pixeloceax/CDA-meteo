import { ForecastStyle } from "./ForecastStyle";
import { Txt } from "../../component/Txt/Txt";
import Container from "../../component/Container/Container";
import { BackButton } from "../../component/BackButton/BackButton";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ForecastListItem } from "../../component/ForecastListItem/ForecastListItem";
import { getWeatherIntepretation } from "../../services/meteo-services";
import { dateToDDMM, DAYS } from "../../services/date-service";

export function Forescast() {
  const { params } = useRoute();

  const header = (
    <View style={ForecastStyle.header}>
      <BackButton />
      <View style={ForecastStyle.header_text}>
        <Txt>{params.city}</Txt>
        <Txt style={ForecastStyle.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );
  return (
    <Container>
      {header}
      <View style={ForecastStyle.list_item_container}>
        {params.time.map((time, index) => {
          const code = params.weathercode[index];
          const image = getWeatherIntepretation(code).image;
          const date = new Date(time);
          const day = DAYS[new Date(time).getDay()];
          const temperature = params.temperature_2m_max[index];
          return (
            <ForecastListItem
              key={index}
              image={image}
              day={day}
              date={dateToDDMM(date)}
              temperature={temperature.toFixed(0)}
            />
          );
        })}
      </View>
    </Container>
  );
}
