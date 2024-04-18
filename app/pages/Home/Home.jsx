import { style } from "./HomeStyle";
import { Alert, View } from "react-native";
import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoBasic } from "../../component/MeteoBasic/MeteoBasic.jsx";
import { MeteoAdvanced } from "../../component/MeteoAdvanced/MeteoAdvanced.jsx";
import { MeteoAPI } from "../../api/meteo";
import { getWeatherIntepretation } from "../../services/meteo-services.js";
import { useNavigation } from "@react-navigation/native";
import Container from "../../component/Container/Container.jsx";
import SearchBar from "../../component/SearchBar/SearchBar.jsx";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(city);

  const currentWeather = weather?.current_weather;
  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  async function getUserLocation() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({
        lat: "48.85",
        lng: "2.35",
      });
    }
  }

  async function fetchWeather(coordos) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordos);
    setWeather(weatherResponse);
  }

  async function fetchCity(coordos) {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordos);
    setCity(cityResponse);
  }

  async function fetchCoordsByCity(city) {
    try {
      const coords = await MeteoAPI.fetchCoordsFromCity(city);
      setCoords(coords);
    } catch (e) {
      Alert.alert(e);
    }
  }

  const nav = useNavigation();

  const NavigateToForecastPage = () => {
    nav.navigate("Forecast", { city, ...weather.daily });
  };

  return currentWeather ? (
    <Container>
      <View style={style.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherIntepretation(currentWeather.weathercode)}
          onPress={NavigateToForecastPage}
        />
      </View>
      <View style={style.searchbar}>
        <SearchBar onSubmit={fetchCoordsByCity} />
      </View>
      <View style={style.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          dawn={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </Container>
  ) : null;
}
