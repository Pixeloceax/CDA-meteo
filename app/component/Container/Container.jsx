import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { ContainerStyle } from "./ContainerStyle";
import fond from "../../../assets/fond.jpg";

export default function Container({ children }) {
  return (
    <ImageBackground source={fond} style={ContainerStyle.img_background}>
      <SafeAreaProvider>
        <SafeAreaView style={ContainerStyle.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
