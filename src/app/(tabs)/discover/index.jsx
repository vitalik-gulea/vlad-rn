import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../../constants";
import { router } from "expo-router";
const renderItem = (pack) => {
  const { item } = pack;
  const onPress = () => {
    router.push(`discover/${item.id}`);
  };
  return (
    <TouchableOpacity
      className={`bg-dark rounded-3xl flex flex-1 overflow-hidden  ${item.isActive}`}
      onPress={onPress}
    >
      <Image
        source={item.image}
        className="w-[164px] h-[164px] object-cover rounded-2xl"
      />
       <Image
        source={item.icons}
        className="w-[32px] h-[32px] absolute rounded-2xl left-2 top-3"
      />
      <View className="p-2">
        <Text className="text-white font-bold text-lg">{item.title}</Text>
        <Text className="text-gray-400 text-sm">{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
;}
export const items = [
  {
    id: 1,
    title: "Guitar Camp",
    subtitle: "7 Songs • Instrumental",
    image: images.mcamp,
    isActive: true,
    songs: [
      {
        title: "test",
        desc: "test2",
      },
    ],
    isBottomSheetActive: true,
    imageType: "guitar",
    icons : icons.play
  },
  {
    id: 2,
    title: "Chill-hop",
    subtitle: "7 Songs • Instrumental",
    image: images.mmoon,
    icons : icons.play
  },
  {
    id: 3,
    title: "Pack name",
    subtitle: "4 Hours • Category name",
    image: images.mforest,
    isActive: true,
    icons : icons.play
  },
  {
    id: 4,
    title: "Pack name",
    subtitle: "4 Hours • Category name",
    image: images.mway,
    icons : icons.play
  },
  {
    id: 5,
    title: "Pack name",
    subtitle: "4 Hours • Category name",
    image: images.mwhale,
    icons : icons.play
  },
  {
    id: 6,
    title: "Pack name",
    subtitle: "4 Hours • Category name",
    image: images.mforest,
    icons : icons.play
  },
  {
    id: 6,
    title: "Pack name",
    subtitle: "4 Hours • Category name",
    image: images.mforest,
    icons : icons.play
  },
];

const Discover = () => {
  return (
    <SafeAreaView className="bg-primary px-3 py-0  ">
      <View className="py-5">
        <Text className="text-3xl font-bold text-white text-start  ">
          Discover
        </Text>
      </View>
      {/*кнопки*/}
      <View className=" flex-row flex gap-8">
        {/* Кнопка "All" */}
        <TouchableOpacity className="bg-secondary flex-row items-center px-4 py-2 rounded-full">
          <Image className="w-5 h-5 mr-2" source={icons.points} />
          <Text className="text-white text-lg">All</Text>
        </TouchableOpacity>
        {/* Кнопка "Ambient" */}

        <TouchableOpacity className="bg-secondary flex-row items-center px-4 py-2 rounded-full">
          <Image className="w-5 h-5 mr-2" source={icons.men} />
          <Text className="text-white text-lg">Ambient</Text>
        </TouchableOpacity>

        {/* Кнопка "For Kids" */}

        <TouchableOpacity className="bg-secondary flex-row items-center px-4 py-2 rounded-full">
          <Image className="w-5 h-5 mr-2" source={icons.kid} />
          <Text className="text-white text-lg">For Kids</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 10, padding: 10 }}
      />
    </SafeAreaView>
  );
};

export default Discover;
