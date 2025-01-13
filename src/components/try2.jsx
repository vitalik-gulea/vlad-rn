import { View, Text } from 'react-native'
import React from 'react'

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
  <View className={`items-center justify-center ml-8`}>
    
    <Image
      className="items-center justify-center ml-14  flex gap-[20px]  "
      source={item.source}
    />

    <View className =" flex gap-[10px] flex-wrap">
    <Text className="text-white text-3xl  text-center justify-center ml-16 ">
      {item.tittle}
    </Text>

    <Text className="text-white justify-center items-center">
      {item.description}
    </Text>
    /</View>
  </View>
);
export default try2