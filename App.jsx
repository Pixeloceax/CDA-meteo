import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { AppStyle } from "./AppStyle";
import { Home } from "./app/pages/Home/Home";
import { ImageBackground } from "react-native";
import fond from "./assets/fond.jpg";
import { useFonts } from "expo-font";
import AlataRegular from "./assets/fonts/AlataRegular.ttf";

export default function App() {
  const [isFontLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <ImageBackground source={fond} style={AppStyle.img_background}>
      <SafeAreaProvider>
        <SafeAreaView style={AppStyle.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
