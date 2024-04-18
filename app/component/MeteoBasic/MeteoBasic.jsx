import { MeteoBasicStyle } from "./MeteoBasicStyle";
import { View, Image, TouchableOpacity } from "react-native";
import { Txt } from "../Txt/Txt";
import { Clock } from "../Clock/Clock";

export function MeteoBasic({ onPress, temperature, city, interpretation }) {
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
        <TouchableOpacity onPress={onPress}>
          <Txt style={MeteoBasicStyle.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image style={MeteoBasicStyle.image} source={interpretation.image} />
      </View>
    </>
  );
}
