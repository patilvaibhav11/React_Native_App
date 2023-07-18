import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';

export default function TrendingScreen({navigation}) {
  return (
    <View>
       <HeaderComponent props={navigation}/>
      <Text>TrendingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})