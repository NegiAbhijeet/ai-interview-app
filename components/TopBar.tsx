// src/components/layout/TopBar.tsx
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const TopBar = () => {
  return (
    <View className="flex-row justify-between items-center h-14 px-6 py-2 bg-white border-b border-black/10">
      <Image
        source={require("@/assets/logo.png")}
        className="h-10 w-10"
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Image
          source={require("@/assets/profile.png")}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
