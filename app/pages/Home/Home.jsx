import { style } from "./HomeStyle";
import { View } from "react-native";
import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoBasic } from "../../component/MeteoBasic/MeteoBasic.jsx";
import { MeteoAdvanced } from "../../component/MeteoAdvanced/MeteoAdvanced.jsx";
import { MeteoAPI } from "../../api/meteo";
import { getWeatherIntepretation } from "../../services/meteo-services.js";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

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

  return currentWeather ? (
    <>
      <View style={style.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherIntepretation(currentWeather.weathercode)}
        />
      </View>
      <View style={style.searchbar}></View>
      <View style={style.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          dawn={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </>
  ) : null;
}
