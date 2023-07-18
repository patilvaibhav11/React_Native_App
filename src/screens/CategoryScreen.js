import { StyleSheet, Text, View, Press, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';

export default function CategoryScreen({navigation}) {
  return (
    <View>
       <HeaderComponent props={navigation}/>
      <Text>CategoryScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})