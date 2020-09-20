import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import {useFonts,Play_400Regular} from '@expo-google-fonts/play';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';

import Header from './src/components/Header';
import Home from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    PressStart2P_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Home/>
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E153A',
    flex: 1
  },
});

