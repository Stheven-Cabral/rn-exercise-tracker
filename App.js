import { StatusBar } from 'expo-status-bar';
// import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeView from './views/welcome';
import HomeView from './views/home';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
