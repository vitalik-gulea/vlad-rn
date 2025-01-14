import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs, Stack } from "expo-router";
import { Image, Text, View } from "react-native";



const ScreenLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>

            <Stack.Screen name="index" options={{
                headerShown: false,
            }} />
            <Stack.Screen name="[id]" options={{
                headerShown: true,
                title: "NEWWW"
            }}
            />


        </Stack>
    );
};

export default ScreenLayout;
