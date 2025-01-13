import { View, Text ,Pressable} from "react-native";
import React, { useEffect, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

const CustomBottomSheet = () => {
  const bottomSheetModalRef = useRef(null);
  
  useEffect(() => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  }, []);

  return (
    <BottomSheetModal ref={bottomSheetModalRef}  >
      <BottomSheetView className="h-[150px] bg-red-600">
        <Text>CLoun</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;
