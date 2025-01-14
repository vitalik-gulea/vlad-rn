import { View, Text, Pressable } from "react-native";
import React, { useEffect, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

const CustomBottomSheet = ({ isOpen, setCloseModal }) => {
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    if (bottomSheetModalRef.current && isOpen) {
      bottomSheetModalRef.current.present();
    }
    else {
      bottomSheetModalRef.current.dismiss()
    }
  }, [isOpen]);
  return (
    <BottomSheetModal ref={bottomSheetModalRef} onDismiss={setCloseModal}  >
      <BottomSheetView className="h-[150px] bg-red-600">
        <Text>CLoun</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;
