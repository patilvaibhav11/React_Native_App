import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppDrawer from './AppDrawer'
const AppStackNavigation = createStackNavigator()

export default function AppStack() {
  return (
    <AppStackNavigation.Navigator screenOptions={{
      headerShown:false
    }}>
      <AppStackNavigation.Screen name='AppDrawer' component={AppDrawer}></AppStackNavigation.Screen>
    </AppStackNavigation.Navigator>
  )
}

const styles = StyleSheet.create({})