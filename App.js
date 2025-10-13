import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SoundscapeScreen from './screens/SoundscapeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DreamTune">
        <Stack.Screen name="DreamTune" component={HomeScreen} />
        <Stack.Screen name="Soundscape" component={SoundscapeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}