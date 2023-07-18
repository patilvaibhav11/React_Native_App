import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import CategoryComp from '../components/CategoryComp';
import BannerSlider from '../components/BannerSlider';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.headerButton}>
      <HeaderComponent props={navigation} />
      <View>
        <ScrollView>
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
  headerButton:{
    flex:1,
  },
  componentStyle: {
    marginBottom: 5
  },
})