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



const Ditails = () => {
  const { id } = useLocalSearchParams();
  useEffect(() => {
    console.log(id, items[id - 1]);

  }, [id])

  return (
    <SafeAreaView className="bg-primary w-full h-full p-4">
      <Image source={items[id - 1].image} className="w-[164px] h-[164px] object-cover rounded-2xl" />
      {
        items[id - 1].isBottomSheetActive && (<View>
          <Text>
            true
          </Text>
        </View>)
      }
    </SafeAreaView>
  );
};

export default Ditails;
