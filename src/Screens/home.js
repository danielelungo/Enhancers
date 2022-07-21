import { View, Text, Button, ScrollView } from "react-native";
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
        <CityCard cityName="london" />
        <CityCard cityName="turin" />
        <CityCard cityName="rome" />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
