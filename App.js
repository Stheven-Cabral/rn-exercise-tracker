import { StatusBar } from 'expo-status-bar';
// import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeView from './views/welcome';
import JoinView from './views/join';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={WelcomeView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Join"
            component={JoinView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
