import React, { useState } from 'react';
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

const HomeView = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.addExerciseButton}>BACK</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonText}>ADD +</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 50
  },
  subContainer: {
    backgroundColor: '#008008',
    width: Dimensions.get('window').width * .95
  },
  button: {
    fontWeight: 'bold',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 5,
    minWidth: Dimensions.get('window').width * .75,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#5fc989'
  },
  buttonText: {
    color: 'white'
  }
});

export default HomeView;