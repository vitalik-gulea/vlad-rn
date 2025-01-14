import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { Button, Text, View } from "react-native";
const Composer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModalClick = () => {
    setIsOpenModal(!isOpenModal)
  }
  const setCloseModal = () => {
    setIsOpenModal(false)
  }
  return (
    <SafeAreaView className="bg-primary  w-full h-full">
      <CustomBottomSheet isOpen={isOpenModal} setCloseModal={setCloseModal} />
      <Button title="Click To open modal" onPress={openModalClick} />
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-white">test</Text>
      </View>
    </SafeAreaView>
  );
};

export default Composer;
