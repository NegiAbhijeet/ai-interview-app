// src/components/layout/BottomTabBar.tsx
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TABS = [
  {
    name: 'index',
    label: 'Home',
    icon: require('@/assets/logo.png'),
    iconActive: require('@/assets/logo.png'),
  },
  {
    name: 'interview',
    label: 'Interview',
    icon: require('@/assets/logo.png'),
    iconActive: require('@/assets/logo.png'),
  },
  {
    name: 'resume',
    label: 'Resume',
    icon: require('@/assets/logo.png'),
    iconActive: require('@/assets/logo.png'),
  },
]

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      className="flex-row justify-around items-center bg-white shadow-md"
      style={{
        paddingBottom: insets.bottom + 4,
        paddingTop: 8,
      }}
    >
      {TABS.map((tab, index) => {
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[index].key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name as never)
          }
        }

        return (
          <Pressable
            key={tab.name}
            onPress={onPress}
            className="flex items-center"
          >
            <Image
              source={isFocused ? tab.iconActive : tab.icon}
              className="w-6 h-6 mb-1"
              resizeMode="contain"
            />
            <Text
              className={`text-xs ${
                isFocused ? 'text-blue-500 font-semibold' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default BottomTabBar
