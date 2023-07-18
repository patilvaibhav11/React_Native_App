import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';

export default function ArticalScreen({navigation}) {
  return (
    <View>
      <HeaderComponent props={navigation}/>
      <Text>ArticalScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})