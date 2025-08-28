// src/components/layout/TopBar.tsx
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TopBar = () => {
  return (
    <View className="flex-row justify-between items-center h-14 px-6 py-2 bg-white border-b border-black/10">
      <View className="flex flex-row items-center  gap-2"><Image
        source={require("@/assets/logo.png")}
        className="h-10 w-10"
        resizeMode="contain"
      />
      <Text className="font-semibold text-lg">AI Interviewagents</Text></View>
      <TouchableOpacity className="border-2 border-gray-500 rounded-full p-2">
        <Image
          source={require("@/assets/profile.png")}
          className="w-6 h-6"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
