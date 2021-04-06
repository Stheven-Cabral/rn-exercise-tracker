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

const HomeView = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.addExerciseButton}>ADD +</Text>
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
  addExerciseButton: {
    color: 'white'
  }
});

export default HomeView;