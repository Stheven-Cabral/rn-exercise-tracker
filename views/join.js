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

const JoinView = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Join Now Page</Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey'
  }
});

export default JoinView;