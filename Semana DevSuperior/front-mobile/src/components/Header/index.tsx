import React from 'react';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import {
  Image, 
  StyleSheet,
  Text,
  View, 
} from 'react-native';


const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')}/>
      <Text style={styles.textLogo1}>Big Game</Text>
      <Text style={styles.textLogo2}>Survey</Text>
    </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3D5AF1',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
    paddingTop: 50,
  },
  textLogo1: {
    color: '#071E3D',
    fontFamily: 'Play_700Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
  },
  textLogo2: {
    color: '#FFF',
    fontFamily: "Play_400Regular",
    fontSize: 18,
  },
  tinyLogo: {
    height: 25,
    width: 25,
  },
});

export default Header;