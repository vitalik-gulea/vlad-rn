import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Text, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../constants";
import * as Location from "expo-location";

import { Redirect, router } from "expo-router";

export default class extends React.Component {
  getLocation = async () => {
    try {
      const { response } = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync({});
      console.log(location);
    } catch (error) {
      Alert.alert("bla bla", "bbob");
    }
  };
  componentDidMount() {
    this.getLocation;
  }

  render() {
    return (
      <SafeAreaView className="bg-primary h-full  ">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="items-center justify-between flex-1">
            <View className="items-center justify-center flex-1">
              <Image source={images.logo} />
              <Text className="text-5xl text-white font-bold text-center">
                Sleep Sounds
              </Text>
            </View>
            <View>
              <Text className=" text-xs text-white font-light text-center">
                Created by
              </Text>
              <Text className=" text-xl text-white font-light text-center">
                Volodea
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
