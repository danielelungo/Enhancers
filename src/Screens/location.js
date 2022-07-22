import { useEffect, useState } from "react";
import { View } from "react-native";
import * as Location from "expo-location";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";
import styled from "styled-components";

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View>
      {errorMsg ? (
        <CustomText>{errorMsg}</CustomText>
      ) : !location ? (
        <CustomText>Waiting for permission...</CustomText>
      ) : null}
      {location && (
        <HourlyAndDailyWeather
          lat={location?.coords?.latitude}
          lon={location?.coords?.longitude}
        />
      )}
    </View>
  );
};

const CustomText = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-top: 25px;
`;

export default LocationScreen;
