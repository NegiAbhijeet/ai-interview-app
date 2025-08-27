import BottomTabBar from '@/components/BottomBar'
import { useColorScheme } from '@/hooks/useColorScheme'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="interview" options={{ title: 'Interview' }} />
      <Tabs.Screen name="resume" options={{ title: 'Resume' }} />
    </Tabs>
  )
}
