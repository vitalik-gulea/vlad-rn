import { View, Text } from 'react-native'
import React from 'react'

const Grayline = () => {
  return (
    <View
    className = "justify-center items-center"
    style={{
        marginInlineStart: "5%",
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: "#2D344B",
        marginVertical: 2,
      }}
           ></View>
  )
}

export default Grayline