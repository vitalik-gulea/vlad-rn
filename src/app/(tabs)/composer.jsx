import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { icons } from "../../constants";
const data = [
  { id: "1", title: "Rain", active: true, icons: icons.rain },
  { id: "2", title: "Ocean", active: false, icons: icons.wind },
  { id: "3", title: "Forest", active: false, icons: icons.tree },
  { id: "4", title: "Mountains", active: false, icons: icons.rain },
];
const renderItem = ({ item }) => (
  <TouchableOpacity
    className={`w-[100px] h-[125px] rounded-2xl overflow-hidden justify-between items-center left-3 ${
      item.active ? "bg-green-500" : "bg-[#1D2236]"
    }`}
  >
    <View className="items-center top-10">
      <Image source={item.icons} />
    </View>

    <View className="h-8 bg-[#2A2F47] w-full justify-center items-center">
      <Text
        className={`text-sm ${item.active ? "text-white" : "text-gray-400"}`}
      >
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const Composer = () => {
  return (
    <SafeAreaView className="bg-primary px-3 py-0 h-full">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-start py-10 left-3  ">
          <Text className="text-white text-5xl font-bold ">Composer</Text>
        </View>
        <View className="py-4 px-4 top-3">
          <Text className="text-white text-2xl">Child</Text>
          <Text className="text-gray-500 text-s">
            Quickly stabilize your baby’s emotions
          </Text>
        </View>
        <View className="flex flex-row top-2 ">
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 1 */}

            <TouchableOpacity className="bg-[#1D2236] w-[100px] h-[125px] rounded-2xl  overflow-hidden">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.girl} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">Female voice</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 2 */}

            <TouchableOpacity className="bg-[#4870FF] w-[100px] h-[125px] rounded-2xl overflow-hidden ">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.noize} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">White noize</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 3 */}

            <TouchableOpacity className="bg-[#1D2236] w-[100px] h-[125px] rounded-2xl overflow-hidden ">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.sleep} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">Lullaby</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="py-4 px-4 top-3">
          <Text className="text-white text-2xl">Nature</Text>
          <Text className="text-gray-500 text-s">
            It will allow you to merge with nature
          </Text>
        </View>
        <FlatList
          className="top-3 "
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => <View className="w-7" />}
          showsHorizontalScrollIndicator={false}
        />

        <View className="py-4 px-4 top-6">
          <Text className="text-white text-2xl">Animals</Text>
          <Text className="text-gray-500 text-s">
            Animal voices will improve your sleep
          </Text>
        </View>
        <View className="flex flex-row top-6 ">
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 1 */}

            <TouchableOpacity className="bg-[#1D2236] w-[100px] h-[125px] rounded-2xl  overflow-hidden">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.bird} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">Bird</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 2 */}

            <TouchableOpacity className="bg-[#1D2236] w-[100px] h-[125px] rounded-2xl overflow-hidden ">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.cat} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">Cat</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center  bg-[#141927] flex-1 px-4">
            {/* Кнопка 3 */}

            <TouchableOpacity className="bg-[#FF9C41] w-[100px] h-[125px] rounded-2xl overflow-hidden ">
              <View className="flex-1 justify-center items-center">
                <Image source={icons.frog} />
              </View>
              <View className="h-[35px] object-cover justify-center items-center bg-[#2A2F47]">
                <Text className="text-gray-400 text-sm ">Frog</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Composer;
