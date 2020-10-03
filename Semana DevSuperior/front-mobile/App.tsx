import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';

import { useFonts, Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';

import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
    PressStart2P_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Routes />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

