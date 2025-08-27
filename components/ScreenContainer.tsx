import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./TopBar";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ScreenContainer = ({ children, className = "" }: Props) => {
  return (
    <SafeAreaView edges={["top"]} className={`flex-1 bg-white ${className}`}>
      <TopBar />
      <View className="flex-1 px-4">{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
