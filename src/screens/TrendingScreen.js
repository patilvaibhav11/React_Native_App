import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';
import TraindingHashtags from '../components/TraindingHashtags';

export default function TrendingScreen({ navigation }) {
  return (
    <View style={{flex:1}}>
      <HeaderComponent props={navigation} />
      <ScrollView>
        <View>
          <TraindingHashtags />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})