import { Image } from "react-native";
import styled from "styled-components";
import { d_names } from "../constants/datesAndTimes";

const DailyCard = ({ dailyData }) => {
  const day = new Date(dailyData.dt * 1000).getDay();
  return (
    <Wrapper>
      <Day>{d_names[day]}</Day>
      <Temp>{Math.round(dailyData.temp.day)}°</Temp>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@4x.png`,
        }}
        style={{ width: 100, height: 100 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: #7eb4f3;
  margin: 10px;
  border-radius: 15px;
  align-items: center;
`;

const Day = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Temp = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
export default DailyCard;
