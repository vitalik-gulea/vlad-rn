import "../global.css";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function Layout() {
  return (
    <GestureHandlerRootView >
      <BottomSheetModalProvider>
        <Slot />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
