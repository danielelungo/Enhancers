import { ScrollView } from "react-native";
import { useState } from "react";

import { completeDay, completeMonth } from "../constants/datesAndTimes";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";
import styled from "styled-components";

const DetailsScreen = ({ route }) => {
  const [color, setColor] = useState("");
  const { cityName, lat, lon } = route.params;

  const childToParent = (childdata) => {
    setColor(childdata);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper color={color}>
        <CityName>{cityName}</CityName>
        <Date>{`${completeDay} ${completeMonth}`}</Date>
        <HourlyAndDailyWeather
          lat={lat}
          lon={lon}
          childToParent={childToParent}
        />
      </Wrapper>
    </ScrollView>
  );
};

const Wrapper = styled.View`
  background-color: ${({ color }) =>
    color === "Clear"
      ? "#6090ed"
      : color === "Rain"
      ? "#3463A6"
      : color === "Clouds"
      ? "#768396"
      : "#F1F1F1"};
`;

const CityName = styled.Text`
  margin-top: 10px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const Date = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  margin: 15px;
  font-weight: 500;
`;

export default DetailsScreen;
