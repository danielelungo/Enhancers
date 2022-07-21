import { ScrollView } from "react-native";
import { curr_hour } from "../constants/datesAndTimes";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

const HourlyCard = ({ hourlyData }) => {
  const getTime = (h) => new Date(h).getHours();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {hourlyData?.slice(0, 12).map((hour) => (
        <Card key={hour.dt}>
          <Hour>
            {getTime(hour.dt * 1000) === curr_hour
              ? "Now"
              : getTime(hour.dt * 1000) > 12
              ? `${getTime(hour.dt * 1000)} p.m.`
              : `${getTime(hour.dt * 1000)} a.m.`}
          </Hour>
          <FontAwesome name="circle" size={24} color="white" />
          <Temp>{Math.round(hour.temp)}°</Temp>
        </Card>
      ))}
    </ScrollView>
  );
};

const Hour = styled.Text`
  color: white;
  margin-bottom: 10px;
`;
const Temp = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const Card = styled.View`
  margin-right: 15px;
`;

export default HourlyCard;
