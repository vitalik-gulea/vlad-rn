import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../../constants'
const home = () => {
  return (
    <SafeAreaView className = "bg-primary justify-items-start items-center w-full h-full">
      <Text className = "text-3xl text-white">home</Text>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})