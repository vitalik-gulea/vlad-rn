import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs, Stack } from "expo-router";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { icons, images } from "../../../constants";

const ScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "secondary",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Sleep",
        }}
      />
    </Stack>


  );
};

export default ScreenLayout;
