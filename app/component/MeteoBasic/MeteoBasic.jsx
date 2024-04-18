import { MeteoBasicStyle } from "./MeteoBasicStyle";
import { View, Image } from "react-native";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

export function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <View style={MeteoBasicStyle.clock}>
        <Txt>
          <Clock />
        </Txt>
      </View>

      <Txt>{city}</Txt>
      <Txt style={MeteoBasicStyle.label}>{interpretation.label}</Txt>

      <View style={MeteoBasicStyle.temperature_containre}>
        <Txt style={MeteoBasicStyle.temperature}>{temperature}°</Txt>
        <Image style={MeteoBasicStyle.image} source={interpretation.image} />
      </View>
    </>
  );
}
