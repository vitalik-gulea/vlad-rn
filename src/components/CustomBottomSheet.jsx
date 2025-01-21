import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useMemo } from "react";
import { Redirect, router } from "expo-router";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheet,
} from "@gorhom/bottom-sheet";
import { icons, images } from "../constants";
import Grayline from "./grayline";

const CustomBottomSheet = ({ isOpen, setCloseModal }) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["30%", "90%"], []);

  useEffect(() => {
    if (bottomSheetModalRef.current && isOpen) {
      bottomSheetModalRef.current.present();
    } else {
      bottomSheetModalRef.current.dismiss();
    }
  }, [isOpen]);

  
  return (
    
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onDismiss={setCloseModal}
      snapPoints={snapPoints}
      index={1}
      backgroundStyle={{ borderRadius: 50, backgroundColor: "#141927" }}
    >
       <ScrollView
       contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
      >
      <BottomSheetView>
        <Text className="text-white font-bold text-3xl left-4 ">
          Guitar Camp{" "}
        </Text>
      </BottomSheetView>
      <View
        style={{
          marginInlineStart: "5%",
          width: "90%",
          borderBottomWidth: 1,
          borderBottomColor: "#21283F",
          marginVertical: 30,
        }}
      ></View>
      <View className="flex flex-row gap gap-10 top-5">
        <TouchableOpacity className="bg-blue-500 rounded-full w-[164px] flex flex-row gap gap-2 left-3 h-[38px] items-center justify-center  ">
          <Image
            source={icons.play}
            className="w-[25px] h-[25px] object-cover rounded-2xl"
          />
          <Text className="text-white text-lg">Play</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-secondary rounded-full w-[164px] left-10 h-[38px] items-center justify-center flex flex-row gap gap-2 ">
          <Image
            source={icons.star}
            className="w-[15px] h-[15px] object-cover rounded-2xl"
          />
          <Text className="text-white text-lg">Favorite</Text>
        </TouchableOpacity>
      </View>
      <View
        className="justify-center items-center"
        style={{
          marginInlineStart: "5%",
          width: "90%",
          borderBottomWidth: 1,
          borderBottomColor: "#2D344B",
          marginVertical: 46,
        }}
      ></View>
      <View className="gap gap-3 left-4">
        <View>
          <Text className="text-2xl text-white">About this pack</Text>
        </View>
        <Text className="text-gray-500">
          An acoustic mix has been specially selected for you. The camping
          atmosphere will help you improve your sleep and your body as a whole.
          Your dreams will be delightful and vivid.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#21283F",
        }}
        className=" w-[360px] h-[255px]  left-7 top-7 rounded-3xl "
      >
        <View className="justify-center top-4 left-4 ">
          <Text className="text-gray-400 text-s">LIST OF SONGS</Text>
        </View>

        <View className="gap gap-3 left-4 top-6">
          <View className="flex flex-row gap gap-4">
            <Text className="text-gray-400 top-2">01</Text>
            <TouchableOpacity>
              <Image
                source={icons.play}
                className="w-[32px] h-[32px] object-cover rounded-2xl"
              />
            </TouchableOpacity>
            <Text className="text-gray-400 top-2">The Guitars </Text>
          </View>
          <Grayline />
          <View className="flex flex-row gap gap-4">
            <Text className="text-gray-400 top-2">02</Text>
            <TouchableOpacity>
              <Image
                source={icons.play}
                className="w-[32px] h-[32px] object-cover rounded-2xl"
              />
            </TouchableOpacity>
            <Text className="text-gray-400 top-2">Lost Without You</Text>
          </View>
          <Grayline />
          <View className="flex flex-row gap gap-4">
            <Text className="text-gray-400 top-2">03</Text>
            <TouchableOpacity>
              <Image
                source={icons.play}
                className="w-[32px] h-[32px] object-cover rounded-2xl"
              />
            </TouchableOpacity>
            <Text className="text-gray-400 top-2">City Lights</Text>
          </View>
          <Grayline />
          <View className="flex flex-row gap gap-4">
            <Text className="text-gray-400 top-2">04</Text>
            <TouchableOpacity>
              <Image
                source={icons.play}
                className="w-[32px] h-[32px] object-cover rounded-2xl"
              />
            </TouchableOpacity>
            <Text className="text-gray-400 top-2">Romantic</Text>
          </View>
        </View>
      </View>
      <View className =" top-10 left-6 " >
        <Text className= " text-xl text-white" >
          Featured On 
        </Text>
      </View>
      <View className=" flex flex-row gap-10 left-6 top-14">
        <TouchableOpacity 
        className = " gap gap-2"
       >
          <Image
            source={images.mwhale}
            className="w-[164px] h-[164px] object-cover rounded-2xl"
          />
          <Image
            source={icons.play}
            className="w-[32px] h-[32px] absolute rounded-2xl left-3 top-3"
          />
          <Text className= "text-white text-xl">Mwhale Song </Text>
          <Text className= "text-gray-500 text-xs">7 songs * Instrumental  </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className = " gap gap-2"
        >
          <Image
            source={images.mmoon}
            className="w-[164px] h-[164px] object-cover rounded-2xl"
          />
          <Image
            source={icons.play}
            className="w-[32px] h-[32px] absolute rounded-2xl left-3 top-3 "
          />
          <Text className= "text-white text-xl">Moon Songs </Text>
          <Text className= "text-gray-500 text-xs">7 songs * Instrumental  </Text>
        </TouchableOpacity>
      </View>
     

      </ScrollView>
    </BottomSheetModal>
   
  );
};

export default CustomBottomSheet;
