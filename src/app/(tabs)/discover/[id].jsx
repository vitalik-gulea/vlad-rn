import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { items } from ".";
import CustomBottomSheet from "../../../components/CustomBottomSheet";



const Ditails = () => {
  const { id } = useLocalSearchParams();
    const [isOpenModal, setIsOpenModal] = useState(true)
    const openModalClick = () => {
      setIsOpenModal(!isOpenModal)
    }
    const setCloseModal = () => {
      setIsOpenModal(false)
    }
  useEffect(() => {
    console.log(id, items[id - 1]);

  }, [id])

  return (
    <SafeAreaView className="bg-primary w-full h-full p-4">
      <Image source={items[id - 1].image} className="w-[164px] h-[164px] object-cover rounded-2xl" />
      <CustomBottomSheet isOpen={isOpenModal} setCloseModal={setCloseModal} />
    </SafeAreaView>
  );
};

export default Ditails;
