import { View, Text, Button, ScrollView } from "react-native";
import { completeDay, completeMonth } from "../constants/datesAndTimes";
import HourlyAndDailyWeather from "../Components/hourlyAndDailyWeather";

const DetailsScreen = ({ route }) => {
  const { cityName, lat, lon } = route.params;

  return (
    <ScrollView>
      <View>
        <Text>{cityName}</Text>
        <Text>{`${completeDay} ${completeMonth}`}</Text>
        <HourlyAndDailyWeather lat={lat} lon={lon} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
