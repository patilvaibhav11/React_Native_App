import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBackComp from '../components/HeaderBackComp';

export default function ReelsScreen({navigation}) {
  return (
    <View>
      <HeaderBackComp props={navigation}/>
      <Text>ReelsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})