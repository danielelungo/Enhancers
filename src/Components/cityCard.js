import { Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../constants/api";
import { completeDay, completeMonth } from "../constants/datesAndTimes";
import styled from "styled-components";

const CityCard = ({ cityName, navigation, timeZone }) => {
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
      <Wrapper color={weather?.weather?.[0].main}>
        <CardText>
          <CityName>{cityName}</CityName>
          <Date>{completeDay}</Date>
          <Date>{completeMonth}</Date>
          <Time>{timeZone}</Time>
        </CardText>

        {weather?.weather?.[0].icon ? (
          <AlignedView>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
              }}
              style={{ width: 130, height: 130 }}
            />
          </AlignedView>
        ) : null}
        {!isNaN(weather?.main?.temp) && (
          <AlignedView>
            <Temp>{Math.round(weather?.main?.temp)}°</Temp>
          </AlignedView>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
export default CityCard;

const Wrapper = styled.View`
  background-color: ${({ color }) =>
    color === "Clear"
      ? "#6090ed"
      : color === "Rain"
      ? "#3463A6"
      : color === "Clouds"
      ? "#768396"
      : "#F1F1F1"};
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  margin: 20px;
`;

const CardText = styled.View`
  margin: 15px 0px 15px 15px;
`;

const CityName = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
const Time = styled.Text`
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Temp = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-left: 15px;
`;

const AlignedView = styled.View`
  align-items: center;
  justify-content: center;
`;
