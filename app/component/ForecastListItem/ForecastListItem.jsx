import { Txt } from "../Txt/Txt";
import { ForecastListItemStyle } from "./ForecastListItemStyle";
import { View, Image } from "react-native";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={ForecastListItemStyle.container}>
      <Image style={ForecastListItemStyle.image} source={image} />
      <Txt style={ForecastListItemStyle.day}>{day}</Txt>
      <Txt style={ForecastListItemStyle.date}>{date}</Txt>
      <Txt>{temperature}°</Txt>
    </View>
  );
}
