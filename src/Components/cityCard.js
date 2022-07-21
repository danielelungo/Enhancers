import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../api/api";

const CityCard = ({ cityName, navigation }) => {
  const [weather, setWeather] = useState([]);

  const searchWeather = () => {
    fetch(`${api.url}weather?q=${cityName}&units=metric&APPID=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    searchWeather();
  }, []);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          cityName,
          lat: weather?.coord?.lat,
          lon: weather?.coord?.lon,
        })
      }
    >
      <Text>{cityName}</Text>
      {weather?.weather?.[0].icon ? (
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
          }}
          style={{ width: 300, height: 300 }}
        />
      ) : null}
      <Text>{Math.round(weather?.main?.temp)}°</Text>
    </TouchableOpacity>
  );
};

export default CityCard;
