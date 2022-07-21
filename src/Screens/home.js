import { View, Text, Button, ScrollView } from "react-native";
import { londonTime, romeTime } from "../constants/datesAndTimes";
import CityCard from "../Components/cityCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text>Home Screen</Text>
        <CityCard
          cityName="London"
          navigation={navigation}
          timeZone={londonTime}
        />
        <CityCard
          cityName="Turin"
          navigation={navigation}
          timeZone={romeTime}
        />
        <CityCard cityName="Rome" navigation={navigation} timeZone={romeTime} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
