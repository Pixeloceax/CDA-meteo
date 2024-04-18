import { StyleSheet } from "react-native";

export const MeteoAdvancedStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "white",
  },
  content: {
    alignItems: "center",
  },
  value: {
    fontSize: 20,
  },
  info: {
    fontSize: 15,
  },
});
