import { View, Text, Button, Image } from "react-native";
import { d_names } from "../constants/datesAndTimes";

const DailyCard = ({ dailyData }) => {
  const day = new Date(dailyData.dt * 1000).getDay();
  return (
    <View>
      <Text>{Math.round(dailyData.temp.day)}°</Text>
      <Text>{d_names[day]}</Text>
      <Image
        source={{
          uri: `http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@4x.png`,
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default DailyCard;
