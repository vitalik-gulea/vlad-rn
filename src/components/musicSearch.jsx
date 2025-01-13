import { View, Text, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { images,icons } from "../constants";


const MusicSearch = () => {
  return (
    <SafeAreaView>
      <View className="rounded-full py-4 justify-center  items-center flex-row flex gap-[56px]">
      <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px] "
          source={images.mforest}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
    
        
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px]"
          source={images.mcamp}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
        />
        </TouchableOpacity>
      </View>
        <View className ="flex-row">
      <View className = "px-2">
      <Text className = "text-2xl text-white">Pack name </Text>
      </View>
      <View className = "justify-end items-end px-28 ">
      <Text className = "text-2xl text-white "> Guitar camp </Text>
      </View>
      </View>
      <View className="rounded-full py-4 justify-center items-center flex-row flex gap-[56px]">
        <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px]"
          source={images.mcamp}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px]"
          source={images.mwhale}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
        />
        <View className ="flex-row">
     
      </View>
        </TouchableOpacity>
      </View>
      <View className="justify-center py-4 items-center flex-row flex gap-[56px] rounded-full">
        <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px]"
          source={images.mmoon}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          className="rounded-3xl w-[164px] h-[164px]"
          source={images.mway}
        />
        <Image
        className="w-12 h-12 absolute py-1 px-2"
        resizeMode='contain' 
        source={icons.play}
        
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MusicSearch;
