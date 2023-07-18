import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CategoryComp() {
  return (
    <>
      <View style={styles.categoryTitleContainer}>
        <View style={styles.categoryTitle}>
          <Text style={styles.title}>Category Name</Text>
        </View>
        <View style={styles.categorySelectDate}>
          <TextInput
            allowFontScaling={false}
            value="11-12-2000"
          />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          <View style={styles.container}>
            <View>
              <View>
                <Image source={require('../assets/CategoryImage/images.png')} style={styles.imageStyle}></Image>
              </View>
              <View style={styles.textContaner}>
                <Text style={styles.headerText}>ABP Maza</Text>
                <Text style={styles.shortDiscription}>Lorem ipsum, dolor sit amet consectetur..</Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <View>
                <Image source={require('../assets/CategoryImage/images.png')} style={styles.imageStyle}></Image>
              </View>
              <View style={styles.textContaner}>
                <Text style={styles.headerText}>ABP Maza</Text>
                <Text style={styles.shortDiscription}>Lorem ipsum, dolor sit amet consectetur..</Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <View>
                <Image source={require('../assets/CategoryImage/images.png')} style={styles.imageStyle}></Image>
              </View>
              <View style={styles.textContaner}>
                <Text style={styles.headerText}>ABP Maza</Text>
                <Text style={styles.shortDiscription}>Lorem ipsum, dolor sit amet consectetur.Lorem ipsum, dolor sit amet consectetur...</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
  // ../assets/CategoryImage/images.png
}

const styles = StyleSheet.create({
  categoryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryTitle: {
    margin: 5,
  },
  title: {
    fontWeight: 800,
    fontFamily: 'OpenSans-Bold',
    fontSize: 19
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10
  },
  imageStyle: {
    height: 120,
    width: 160,
    margin: 5,
    borderRadius: 10,
  },
  categoryTitle: {
    marginLeft: 10,
    marginRight: 10
  },
  textContaner: {
    minWidth: 160,
    width: 160,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    fontFamily: 'OpenSans-Regular'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'OpenSans-Bold'
  },
  shortDiscription: {
    fontWeight: '200',
    fontFamily: 'OpenSans-Regular'
  }
})