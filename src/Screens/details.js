import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../api/api";
import DailyCard from "../Components/dailyCard";

const DetailsScreen = ({ navigation, route }) => {
  const [weather, setWeather] = useState([]);
  const { cityName, lat, lon } = route.params;

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
  }, []);

  console.log("=>", weather);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{cityName}</Text>
      <Text>{lat}</Text>
      <Text>{lon}</Text>
      {weather.hourly &&
        weather?.hourly
          ?.slice(0, 12)
          .map((hour) => <Text key={hour.dt}>{hour.temp}</Text>)}
      <Text>PORCO</Text>
      {weather.daily &&
        weather?.daily
          ?.slice(1, 8)
          .map((dailyData) => (
            <DailyCard key={dailyData.dt} dailyData={dailyData} />
          ))}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default DetailsScreen;
