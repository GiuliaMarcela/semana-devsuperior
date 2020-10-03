import React, {useState, useEffect} from 'react';

import {GamePlatform, Game} from './types';
import {FontAwesome5 as Icon} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet, View, TextInput, Text, Alert} from 
'react-native';
import api from 'axios';


import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import RNPickerSelect from 'react-native-picker-select';

const placeholder = {
  label: 'Selecione um jogo',
  value: null
}

const BASE_URL = 'http://127.0.0.1:8080';
const mapSelectValues = (games: Game[]) => {
  return games.map(game => ({
    ...game,
    label: game.title,
    value: game.id
  }))
}

const CreateRecord = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState('');
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
    const gamesByPlatform = allGames.filter(
      game => game.platform === selectedPlatform
    )
    setFilteredGames(gamesByPlatform)
  };

  const handleSubmit = () => {
    const payload = { name, age, gameId: selectedGame}
    api.post(`${BASE_URL}/records`, payload).then(() => {
      setName('');
      setAge('');
      setSelectedGame('');
      setPlatform(undefined);
    })
    .catch(() => Alert.alert('Erro ao salvar informações!'))
  }

  useEffect(() => {
    api.get(`${BASE_URL}/games`).then(response => {
      const selectValues = mapSelectValues(response.data);
    })
    .catch(() => Alert.alert('Erro ao listar os jogos!'))
  }, []);

  return (  
    <>
      <Header />
      <View style={styles.container}>
        <TextInput style={styles.inputText} placeholder="Nome"
          placeholderTextColor="#9E9E9E"
          onChangeText={text => setName(text)}
          value={name} />
        <TextInput style={styles.inputText} placeholder="Idade" maxLength={2}
          keyboardType="numeric"   
          placeholderTextColor="#9E9E9E"
          onChangeText={text => setName(text)}
          value={age} />
        <View style={styles.platformContainer}>
          <PlatformCard platform="PC" icon="laptop" onChange={handleChangePlatform}
            activePlatform={platform} />
          <PlatformCard platform="XBOX" icon="xbox" onChange={handleChangePlatform}
            activePlatform={platform} />
          <PlatformCard platform="PLAYSTATION" icon="playstation" onChange={handleChangePlatform}
            activePlatform={platform} />
        </View>
        <RNPickerSelect useNativeAndroidPickerStyle={false} style={pickerSelectStyles}
          onValueChange={value =>{
            setSelectedGame(value);
          }} 
          placeholder={placeholder}
          items={filteredGames}
          value={selectedGame}
          Icon={() =>{
            return <Icon name="chevron-down" color="#9e9e9e" size={20}
              style={pickerSelectStyles.iconContainer}/>
          }} 
        />
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              Salvar
            </Text>
          </RectButton>
        </View>
      </View>
    </>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#008AA6',
    fontSize: 16,
    fontFamily: "Play_700Bold",
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingRight: 30,
  },
  inputAndroid: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#008AA6',
    fontFamily: "Play_700Bold",
    height: 50,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingRight: 30,
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    right: 12,
    top: 8,
  }
})

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    paddingRight: '5%',
    paddingLeft: '5%',
    paddingBottom: 50
  },
  inputText: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#008AA6',
    fontFamily: "Play_700Bold",
    fontSize: 16,
    height: 50,
    marginBottom: 21,
    paddingLeft: 20
  },
  platformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    marginTop: '15%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF1F5A',
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#0B1F34',
    fontFamily: "Play_700Bold",
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default CreateRecord;