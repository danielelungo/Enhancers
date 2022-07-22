import { useState } from "react";
import { api } from "../constants/api";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";
import styled from "styled-components";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");
  const [color, setColor] = useState("");

  const childToParent = (childdata) => {
    setColor(childdata);
  };

  const search = () => {
    fetch(`${api.url}weather?q=${text}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setText("");
        setWeather(result);
        if (!result.ok) setError(result.message);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Wrapper color={color}>
      <Input
        placeholder="search a city..."
        textAlign="center"
        value={text}
        onChangeText={setText}
        onSubmitEditing={search}
      />
      <Errror>{error}</Errror>
      {weather ? (
        <HourlyAndDailyWeather
          childToParent={childToParent}
          searchText={text}
          lat={weather?.coord?.lat}
          lon={weather?.coord?.lon}
        />
      ) : null}
    </Wrapper>
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

const Input = styled.TextInput`
  height: 40px;
  margin: 15px;
  border-width: 1px;
  border-radius: 10px;
  background-color: white;
`;

const Errror = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export default SearchScreen;
