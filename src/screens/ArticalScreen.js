import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';
import MainArtical from '../components/MainArtical';

export default function ArticalScreen({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent props={navigation} />
      <Pressable style={styles.addArticalForm}>
        <Text style={{ fontSize: 17, fontFamily: 'OpenSans-Bold', marginRight: 12 }}>Add your own artical</Text>
        <Ionicons name="add-circle" color='#000' size={30} />
      </Pressable>
      <ScrollView>
        <View style={{ paddingBottom:100}}>
          <MainArtical />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  addArticalForm: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10
  }
})