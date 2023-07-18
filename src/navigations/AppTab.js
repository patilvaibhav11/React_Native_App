import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ReelsScreen from '../screens/ReelsScreen'
import ArticalScreen from '../screens/ArticalScreen'
import TrendingScreen from '../screens/TrendingScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
const AppTabNavigation = createBottomTabNavigator()

export default function AppTab() {
  return (
    <AppTabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        ...styles.tabBarStyle
      }
    }}>
      <AppTabNavigation.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={25} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text></Text>
          )
        }}></AppTabNavigation.Screen>

      <AppTabNavigation.Screen name='Category' component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "apps" : "apps-outline"} color={color} size={25} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text></Text>
          )
        }}></AppTabNavigation.Screen>
      <AppTabNavigation.Screen name='Reel' component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "play" : "play-outline"} color={color} size={25} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text></Text>
          ),
          tabBarStyle: { display: "none" },
        }}></AppTabNavigation.Screen>
      <AppTabNavigation.Screen name='Articals' component={ArticalScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "ios-book" : "ios-book-outline"} color={color} size={25} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text></Text>
          )
        }}></AppTabNavigation.Screen>
      <AppTabNavigation.Screen name='Trending' component={TrendingScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "ios-rocket" : "ios-rocket-outline"} color={color} size={25} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text></Text>
          )
        }}></AppTabNavigation.Screen>
    </AppTabNavigation.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height: 75,
    margin: 12,
    paddingTop: 15,
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 0,
    position: 'absolute',
  }
})