import { ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../constants/api";
import DailyCard from "./dailyCard";
import HourlyCard from "./hourlyCard";
import styled from "styled-components";

const HourlyAndDailyWeather = ({ lat, lon, searchText }) => {
  const [weather, setWeather] = useState();

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
  }, [lat, lon, searchText]);

  return (
    <ScrollView>
      <Wrapper>
        <Weather>{weather?.current?.weather?.[0].main}</Weather>
        <Flex>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${weather?.current?.weather?.[0]?.icon}@4x.png`,
            }}
            style={{ width: 150, height: 150 }}
          />
          <Temp>{Math.round(weather?.current?.temp)}°</Temp>
        </Flex>
        <HourlyCard hourlyData={weather?.hourly} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          {weather?.daily?.slice(1, 8).map((dailyData) => (
            <DailyCard key={dailyData.dt} dailyData={dailyData} />
          ))}
        </ScrollView>
      </Wrapper>
    </ScrollView>
  );
};
const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #6090ed;
  height: 100%;
`;
const Flex = styled.View`
  margin: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Temp = styled.Text`
  color: white;
  font-size: 60px;
  font-weight: bold;
  margin-left: 20px;
`;

const Weather = styled.Text`
  color: white;
  font-size: 20px;
`;

export default HourlyAndDailyWeather;
