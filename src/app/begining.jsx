import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../constants";
import { Redirect, router } from "expo-router";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    source: images.exclusive,
    tittle: "Exclusive sounds",
    description:
      "We have an author's library of sounds \nthat  you will not find anywhere else",
  },
  {
    id: "2",
    source: images.relax,
    tittle: "Relax sleep sounds",
    description:
      "Our sounds will help to relax and improve \nyour sleep health",
  },
  {
    id: "3",
    source: images.story,
    tittle: "Story for kids",
    description:
      "Famous fairy tales with soothing sounds will \nhelp your children fall asleep faster",
  },
];

const renderItem = ({ item }) => (
  <View
    style={{ width }}
    className={`items-center justify-center flex flex-1 `}
  >
    <Image
      className="items-center justify-center  flex gap-[20px]  "
      source={item.source}
    />

    <View className=" flex gap-[10px] flex-wrap">
      <Text className="text-white text-[25px]  text-center justify-center ">
        {item.tittle}
      </Text>
      <Text className="text-white justify-center items-center">
        {item.description}
      </Text>
    </View>
  </View>
);

const begining = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(
      offsetX / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentIndex(index);
  };

  const Button = () => {
    return currentIndex == DATA.length - 1 ? (
      <TouchableOpacity
        className="bg-secondary rounded-full w-96 left-10 h-14 items-center justify-center  "
        onPress={() => router.push("/discover")}
      >
        <Text className="text-white text-lg">Start</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={goNextSlide}
        className="bg-secondary rounded-full w-96 left-10 h-14 items-center justify-center  "
      >
        <View>
          <Text className="text-white text-lg">Next</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {DATA.map((_, index) => (
            <View
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor: currentIndex === index ? "#4870FF" : "#21283F",
              }}
            />
          ))}
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentIndex(nextSlideIndex);
  };

  return (
    <SafeAreaView className="bg-primary h-full justify-center ">
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ height: "100%" }}
      />
      <View className="flex gap-[20px] flex-1 justify-center">
        <Footer />
        <Button />
      </View>
    </SafeAreaView>
  );
};
export default begining;
