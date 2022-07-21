import { View, Text, Button, Image } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../api/api";

const CityCard = ({ cityName }) => {
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
  console.log("mamam", weather?.weather?.[0].icon);
  return (
    <>
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
    </>
  );
};

export default CityCard;
