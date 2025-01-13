import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { Text, View } from "react-native";
const Composer = () => {
  return (
    <SafeAreaView className="bg-primary  w-full h-full">
      <CustomBottomSheet />

      <View className="flex flex-1 justify-center items-center">
        <Text className="text-white">test</Text>
      </View>
    </SafeAreaView>
  );
};

export default Composer;
