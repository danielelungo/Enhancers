import { View, Text, Button, ScrollView } from "react-native";
import { londonTime, romeTime } from "../constants/datesAndTimes";
import CityCard from "../Components/cityCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Text>Home Screen</Text>
        <CityCard
          cityName="london"
          navigation={navigation}
          timeZone={londonTime}
        />
        <CityCard
          cityName="turin"
          navigation={navigation}
          timeZone={romeTime}
        />
        <CityCard cityName="rome" navigation={navigation} timeZone={romeTime} />
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
