import { StyleSheet } from "react-native";

export const MeteoBasicStyle = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    padding: 20,
  },
  image: {
    height: 90,
    width: 90,
  },
  temperature_containre: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 100,
  },
});
