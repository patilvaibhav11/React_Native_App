import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AppStack from './AppStack';
import AuthStack from './AuthStack';
const Stack = createStackNavigator()

export default function Navigations() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{
       headerShown:false
     }}>
       <Stack.Screen name='AppStack' component={AppStack}></Stack.Screen>
       <Stack.Screen name='AuthStack' component={AuthStack}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})