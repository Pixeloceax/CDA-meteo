import { TextInput } from "react-native";
import { SearchBarStyle } from "./SearchBarStyle";

export default function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={SearchBarStyle.input}
      placeholder="Chercher une ville"
      clearTextOnFocus
    />
  );
}
