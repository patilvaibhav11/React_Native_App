import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import CategoryComp from '../components/CategoryComp';
import BannerSlider from '../components/BannerSlider';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <HeaderComponent props={navigation} />
      <View style={{flex:1, paddingBottom:85}}>
        <ScrollView showsVerticalScrollIndicator="false">
          <View style={styles.componentStyle}>
            <BannerSlider />
          </View>
          <View style={styles.componentStyle}>
            <CategoryComp />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1,
  },
  componentStyle: {
    marginBottom: 5
  },
})