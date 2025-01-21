import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons, images } from "../constants";
const BottomForProfile = () => {
  return (
    <TouchableOpacity className="w-full flex flex-row  ">
      <View className="items-end justify-center left-[250px] ">
        <Image source={icons.rorange} />
      </View>
    </TouchableOpacity>
  );
};

export default BottomForProfile;
