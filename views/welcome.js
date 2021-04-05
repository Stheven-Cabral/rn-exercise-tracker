// React hooks are supported in react native.
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import ProgressIcon from '../src/icons/progress-icon';
import DumbbellIcon from '../src/icons/dumbbell-icon';
import StarIcon from '../src/icons/star-icon';

const WelcomeView = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to <Text style={{ color: '#5fc989' }}>MaxRep</Text></Text>
      <View style={styles.introItem}>
        <DumbbellIcon />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: '#5fc989' }]}>Track your pushups</Text>
          <Text style={styles.text}>A simple, hassel free, quick tracker for your workouts.</Text>
        </View>
      </View>
      <View style={styles.introItem}>
        <StarIcon />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: '#5fc989' }]}>Get motivated</Text>
          <Text style={styles.text}>It only takes 15 minutes a day to be a push up champion.</Text>
        </View>
      </View>
      <View style={styles.introItem}>
        <ProgressIcon />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: '#5fc989' }]}>Make progress</Text>
          <Text style={styles.text}>See your numbers and your strength increase weekly. Lorem ipsum Lorem ipsum Lorem ipsum</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Join')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'left',
    marginLeft: 25
  },
  introItem: {
    width: Dimensions.get('window').width * .95,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textItems: {
    marginLeft: 15,
    width: '80%'
  },
  text: {
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    fontWeight: 'bold',
    paddingVertical: 10,
    marginHorizontal: 10,
    minWidth: Dimensions.get('window').width * .75,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#5fc989'

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
});

export default WelcomeView;