import { Home } from "./app/pages/Home/Home";
import { useFonts } from "expo-font";
import AlataRegular from "./assets/fonts/AlataRegular.ttf";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forescast } from "./app/pages/Forecast/Forecast";

export default function App() {
  const [isFontLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  const Stack = createNativeStackNavigator();
  const navTheme = {
    colors: {
      background: "transparent",
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forescast} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
