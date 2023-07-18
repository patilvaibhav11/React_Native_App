import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { configureFonts, PaperProvider } from 'react-native-paper'
import Navigations from './src/navigations/Navigations';

export default function App() {
  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
    },
    ios: {
      regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'normal',
      },
    },
  };

  const theme = {
    fonts: configureFonts(fontConfig),
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Navigations />
      </PaperProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})