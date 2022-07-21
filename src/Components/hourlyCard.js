import { View, Text, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { curr_hour } from "../constants/datesAndTimes";

const HourlyCard = ({ hourlyData }) => {
  console.log("£", hourlyData);

  //   const date = new Date(hourlyData?.dt * 1000).getHours();
  const getTime = (h) => new Date(h).getHours();
  return (
    <View>
      {hourlyData?.slice(0, 12).map((hour) => (
        <View key={hour.dt}>
          <Text>{Math.round(hour.temp)}°</Text>
          <Text>
            {getTime(hour.dt * 1000) === curr_hour
              ? "Now"
              : getTime(hour.dt * 1000) > 12
              ? `${getTime(hour.dt * 1000)} p.m.`
              : `${getTime(hour.dt * 1000)} a.m.`}
            {/* {new Date(hour.dt * 1000).getHours() === new Date().getHours()
              ? "Now"
              : new Date(hour.dt * 1000).getHours() > 12
              ? `${new Date(hour.dt * 1000).getHours()} p.m.`
              : `${new Date(hour.dt * 1000).getHours()} a.m.`} */}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default HourlyCard;
