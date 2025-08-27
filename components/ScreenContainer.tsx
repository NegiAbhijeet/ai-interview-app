import React from "react";
import { ScrollView, View } from "react-native";
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-6">
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenContainer;
