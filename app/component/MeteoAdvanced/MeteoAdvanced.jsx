import { MeteoAdvancedStyle } from "./MeteoAdvancedStyle";
import { View } from "react-native";
import { Txt } from "../Txt/Txt.jsx";

export function MeteoAdvanced({ dusk, dawn, wind }) {
  return (
    <View style={MeteoAdvancedStyle.container}>
      <View style={MeteoAdvancedStyle.content}>
        <Txt style={MeteoAdvancedStyle.value}>{dusk}</Txt>
        <Txt style={MeteoAdvancedStyle.info}>Aube</Txt>
      </View>
      <View style={MeteoAdvancedStyle.content}>
        <Txt style={MeteoAdvancedStyle.value}>{dawn}</Txt>
        <Txt style={MeteoAdvancedStyle.info}>Crépuscule</Txt>
      </View>
      <View style={MeteoAdvancedStyle.content}>
        <Txt style={MeteoAdvancedStyle.value}>{wind}</Txt>
        <Txt style={MeteoAdvancedStyle.info}>Vent</Txt>
      </View>
    </View>
  );
}
