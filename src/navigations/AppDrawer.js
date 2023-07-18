import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import AppTab from './AppTab'
import CustomDrawer from '../drawer/CustomDrawer'
const AppDrawerNavigator = createDrawerNavigator()

export default function AppDrawer() {
  return (
    <AppDrawerNavigator.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer />}>
      <AppDrawerNavigator.Screen name='AppTab' component={AppTab}></AppDrawerNavigator.Screen>
    </AppDrawerNavigator.Navigator>
  )
}

const styles = StyleSheet.create({})