import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { items } from ".";
import CustomBottomSheet from "../../../components/CustomBottomSheet";
import { icons } from "../../../constants";

import AllImages from "../../../constants/AllImages";
const Ditails = () => {
  const { id } = useLocalSearchParams();
  const [isOpenModal, setIsOpenModal] = useState(true);
  const openModalClick = () => {
    setIsOpenModal(!isOpenModal);
  };
  const setCloseModal = () => {
    setIsOpenModal(false);
  };

  const backClick = () => {
    setIsOpenModal(false);
    router.push("/discover");
  };
  return (
    <SafeAreaView className="bg-blue-950 w-full h-full relative">
      {items[id - 1].isBottomSheetActive && (
        <View className=" w-96 left-10 h-14 items-start flex flex-row gap gap-2 justify-start  ">
          <TouchableOpacity
            onPress={backClick}
            className=" flex flex-row gap gap-2 justify-start"
          >
            <Image source={icons.back} className="top-2" />
            <Text className="text-blue-700 text-3xl">Back</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={openModalClick}>
        <AllImages iconName={items[id - 1].imageType} />
      </TouchableOpacity>
      {items[id - 1].isBottomSheetActive && (
        <CustomBottomSheet isOpen={isOpenModal} setCloseModal={setCloseModal} />
      )}
    </SafeAreaView>
  );
};

export default Ditails;
