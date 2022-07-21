import { View, Text, Button, ScrollView } from "react-native";
import { completeData } from "../constants/datesAndTimes";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";

const DetailsScreen = ({ route }) => {
  const { cityName, lat, lon } = route.params;

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{cityName}</Text>
        <Text>{completeData}</Text>
        <Text>{lat}</Text>
        <Text>{lon}</Text>
        <HourlyAndDailyWeather lat={lat} lon={lon} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
