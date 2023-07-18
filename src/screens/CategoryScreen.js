import { StyleSheet, Text, View, Press, Pressable, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import Category from '../components/Category';

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <HeaderComponent props={navigation} />
      <ScrollView>
        <View>
          <Category/>
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1,
  },
})