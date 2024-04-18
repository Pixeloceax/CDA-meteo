import { Text, useWindowDimensions } from "react-native";
import { TxtStyle } from "./TxtStyle";

export function Txt({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || TxtStyle.text.fontSize;
  const echelle = 1 / height;

  return (
    <Text
      style={[TxtStyle.text, style, { fontSize: fontSize * echelle * height }]}
    >
      {children}
    </Text>
  );
}
