import { View, Text, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../constants/api";
import DailyCard from "./dailyCard";
import HourlyCard from "./hourlyCard";
import { completeData } from "../constants/datesAndTimes";

const HourlyAndDailyWeather = ({ lat, lon }) => {
  console.log("lon", lat, lon);
  const [weather, setWeather] = useState([]);

  const searchDaily = () => {
    fetch(
      `${api.url}onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${api.key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    searchDaily();
  }, [lon, lat]);
  return (
    <ScrollView>
      <HourlyCard hourlyData={weather?.hourly} />
      <Text>PORCO</Text>
      {weather.daily &&
        weather?.daily
          ?.slice(1, 8)
          .map((dailyData) => (
            <DailyCard key={dailyData.dt} dailyData={dailyData} />
          ))}
    </ScrollView>
  );
};

export default HourlyAndDailyWeather;
