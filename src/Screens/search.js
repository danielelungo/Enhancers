import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { api } from "../constants/api";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [weather, setWeather] = useState();

  const search = () => {
    fetch(`${api.url}weather?q=${text}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setText("");

        setWeather(result);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="search a city..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={search}
      />
      <Text>{weather?.weather?.[0].main}</Text>
      {weather ? (
        <HourlyAndDailyWeather
          lat={weather.coord.lat}
          lon={weather.coord.lon}
        />
      ) : null}
    </View>
  );
};

export default SearchScreen;
