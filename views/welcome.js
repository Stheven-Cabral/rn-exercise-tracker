// React hooks are supported in react native.
import * as React from 'react';
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
import Dumbbell from '../src/icons/Dumbbell';

const WelcomeView = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to <Text style={{ color: 'maroon' }}>MaxRep</Text></Text>
      <View style={styles.introItem}>
        <Dumbbell />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: 'maroon' }]}>Track your pushups</Text>
          <Text style={styles.text}>A simple, hassel free, quick tracker for your workouts.</Text>
        </View>
      </View>
      <View style={styles.introItem}>
        <Dumbbell />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: 'maroon' }]}>Get motivated</Text>
          <Text style={styles.text}>It only takes 15 minutes a day to be a push up champion.</Text>
        </View>
      </View>
      <View style={styles.introItem}>
        <Dumbbell />
        <View style={styles.textItems}>
          <Text style={[styles.text, { color: 'maroon' }]}>Make progress</Text>
          <Text style={styles.text}>See your numbers and your strength increase weekly. Lorem ipsum Lorem ipsum Lorem ipsum</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button}><Text style={{ color: 'white' }}>JOIN</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={{ color: 'white' }}>LOGIN</Text></TouchableOpacity>
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
    width: Dimensions.get('window').width,
    marginLeft: 10,
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
    backgroundColor: 'maroon',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: 'white',
    minWidth: 100,
    alignItems: 'center'
  }
});

export default WelcomeView;