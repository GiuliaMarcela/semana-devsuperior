import React from 'react';

import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextBase,
  View
} from 'react-native';

const Home = () => {
  const handleOnPress = () => {
    Alert.alert('você clicou no botão!')
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/gamer.png')} style={styles.gamerImage} />
        <Text style={styles.title}>Vote agora!</Text>
        <Text style={styles.subTitle}>Nos diga qual é o seu jogo favorito!</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>
            Coletar dados
          </Text>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="chevron-right" color="#fff" size={25} />
            </Text>
          </View>
        </RectButton> 
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '30%',
  },
  gamerImage: {
    height: 288,
    width: 309,
  },
  title: {
    color: '#fff',
    fontFamily: "PressStart2P_400Regular",
    fontSize: 36,
    marginTop: 31,
  },
  subTitle: {
    color: '#00D4FF',
    fontFamily: "Play_400Regular",
    fontSize: 21,
    marginTop: 15,
  },
  footer: {
    alignItems: 'center',
    marginTop: '15%',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonIcon: {
    alignItems: 'center',
    backgroundColor: '#FF304F',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    width: 50,
  },
  buttonText: {
    color: '#0B1F34',
    fontFamily: "Play_400Regular",
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    textTransform: "uppercase",
  }
});


export default Home