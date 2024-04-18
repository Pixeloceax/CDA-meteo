import { BackButtonStyle } from "./BackButtonStyle";
import { Txt } from "../Txt/Txt";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const nav = useNavigation();

  return (
    <TouchableOpacity style={BackButtonStyle.back_btn} onPress={nav.goBack}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );
}
