import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title,handlePress,containerStyles,textStyles, isLoading} ) => {



  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
     className = "bg-slate-500 rounded-xl min-h-[32px] justify-center items-center">
        <Text className ="text-lg ">CustomButton</Text>
        </TouchableOpacity> 
    
  )
}

export default CustomButton

const styles = StyleSheet.create({})