import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const TABS = [
  {
    name: "index",
    label: "Home",
    icon: "home-outline",
    iconActive: "home",
  },
  {
    name: "interview",
    label: "Interview",
    icon: "mic-outline",
    iconActive: "mic",
    isCenter: true,
  },
  {
    name: "reports",
    label: "Reports",
    icon: "document-text-outline",
    iconActive: "document-text",
  },
];

const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row justify-around items-center bg-white border-t border-black/10 shadow-md"
    >
      {TABS.map((tab, index) => {
        const isFocused = state.index === index;
        const iconName = isFocused ? tab.iconActive : tab.icon;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: state.routes[index].key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name as never);
          }
        };

        if (tab.isCenter) {
          const labelColor = isFocused ? "#3B82F6" : "#9CA3AF";

          return (
            <Pressable
              key={tab.name}
              onPress={onPress}
              className="items-center justify-center"
              style={{ top: -10 }}
            >
              <LinearGradient
                colors={["skyblue", "#8B5CF6"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              >
                <Icon
                  name={iconName}
                  size={28}
                  // color={isFocused ? "#ffffff" : "#9CA3AF"}
                  color={"#ffffff"}
                />
              </LinearGradient>
              <Text
                style={{
                  fontSize: 11,
                  marginTop: 4,
                  color: labelColor,
                  fontWeight: isFocused ? "600" : "normal",
                }}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        }

        return (
          <Pressable
            key={tab.name}
            onPress={onPress}
            className="flex items-center"
          >
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? "#3B82F6" : "#9CA3AF"}
            />
            <Text
              className={`text-xs mt-1 ${
                isFocused ? "text-blue-500 font-semibold" : "text-gray-400"
              }`}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
