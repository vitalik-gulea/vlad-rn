import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { icons, images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import Grayline from "../../components/grayline";
import Grayline2 from "../../components/grayline2";
import BottomForProfile from "../../components/BottomForProfile";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary px-2 py-[20px] h-full ">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 200 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-start py-[40px] left-3  ">
          <Text className="text-white text-5xl font-bold ">Profile</Text>
        </View>
        <View className="justify-center items-center">
          <View className=" w-[370px] h-[270px]  rounded-3xl bg-[#21283F] items-center justify-center border gap gap-2 border-white">
            <Image className="items-center" source={icons.face} />
            <Text className=" text-white text-2xl">Authorization</Text>

            <Text className="text-gray-500">
              In order to access the library of favorite packs {"\n"}
              of sounds, log in with Apple ID
            </Text>
            <TouchableOpacity className="bg-[#141927] w-[263px] rounded-full py-3 items-center flex-row justify-center gap-2">
              <Image source={icons.apple} />

              <Text className="text-white text-lg font-medium">
                Login with Apple ID
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" top-4">
          <Grayline2 />
        </View>
        <TouchableOpacity className="flex flex-row  w-full gap gap-2 top-6 left-2">
          <Image source={icons.crown} />
          <View className="items-center justify-center">
            <Text className="text-orange-500">Get Premium</Text>
          </View>
          <View className=" items-end justify-center left-[250px] ">
            <Image source={icons.rorange} />
          </View>
        </TouchableOpacity>
        <View className=" top-7">
          <Grayline2 />
        </View>
       
        <View className=" top-[52px]">
          <Grayline2 />
        </View>
        <TouchableOpacity className="flex flex-row  w-full gap gap-2 top-[52px] left-2">
          <Image source={icons.file1} />
          <View className="items-center justify-center">
            <Text className="text-white">Private policy</Text>
          </View>
          <View className=" items-end justify-center left-[250px] ">
            <Image source={icons.rblack} />
          </View>
        </TouchableOpacity>
        <View className=" top-[54px]">
          <Grayline2 />
        </View>
        <TouchableOpacity className="flex flex-row  w-full gap gap-2 top-[55px] left-2">
          <Image source={icons.file2} />
          <View className="items-center justify-center">
            <Text className="text-white">License agreement</Text>
          </View>
          <View className=" items-end justify-center left-[213px] ">
            <Image source={icons.rblack} />
          </View>
        </TouchableOpacity>
        <View className=" top-[57px]">
          <Grayline2 />
        </View>
        <View className=" top-[85px]">
          <Grayline2 />
        </View>
        <TouchableOpacity className="flex flex-row  w-full  gap gap-2 top-[90px] left-2">
          <Image
           source={icons.rateus} />
          <View className="items-center justify-center">
            <Text className="text-white">Rate us</Text>
          </View>
          <View className=" items-end justify-center left-[285px] ">
            <Image source={icons.rblack} />
          </View>
        </TouchableOpacity>
        <View className=" top-[95px]">
          <Grayline2 />
        </View>
        <TouchableOpacity className="flex flex-row  w-full  gap gap-2 top-[100px] left-2">
          <Image
           source={icons.rateus} />
          <View className="items-center justify-center">
            <Text className="text-white">Send Feedback</Text>
          </View>
          <View className=" items-end justify-center left-[230px] ">
            <Image source={icons.rblack} />
          </View>
        </TouchableOpacity>
        <View className=" top-[105px]">
          <Grayline2 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
