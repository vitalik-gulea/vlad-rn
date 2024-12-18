import {StatusBar} from "expo-status-bar";
import React from 'react';
import {Image, Text,View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../constants"
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";



export default function App(){
    return (
    <SafeAreaView className ="bg-red-900 h-full  ">
        {/* <ScrollView contentContainerStyle={{height : '100%'}}> */}
            <View className = "">
                <Image 
                source={images.logo}
                />
                <View className ="relatative mt-5">
                <Text className = "text-3xl text-white font-bold text-center">
                    Sleep Sounds 
                </Text>
                </View>

                <View className ="text-justify">
                    
                {/* <CustomButton
                title = 'next'
                handlePress ={() => null}
                ContainerStyles="w-full-mt-7"
                 /> */}
                 <Text className = " text-3xl text-white font-light "> 

                        Created by 
                        
                    </Text>
                </View>
            </View> 

        {/* </ScrollView> */}
    </SafeAreaView>
    )
}