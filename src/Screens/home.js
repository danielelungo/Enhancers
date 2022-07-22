import { View, ScrollView } from "react-native";
import { londonTime, romeTime } from "../constants/datesAndTimes";
import CityCard from "../Components/cityCard";
import styled from "styled-components";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Title>{`Good morning! \n Mario`}</Title>
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

const Title = styled.Text`
  color: #01175f;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default HomeScreen;
