import { Text } from "react-native";
import { TxtStyle } from "./TxtStyle";

export function Txt({ children, style }) {
  return <Text style={[TxtStyle.text, style]}>{children}</Text>;
}
