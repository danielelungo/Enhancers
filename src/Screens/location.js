import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
      {errorMsg || location ? (
        <Text>{errorMsg}</Text>
      ) : (
        <Text>"Waiting for permission..."</Text>
      )}
      {location && (
        <HourlyAndDailyWeather
          lat={location?.coords?.latitude}
          lon={location?.coords?.longitude}
        />
      )}
    </View>
  );
};

export default LocationScreen;
