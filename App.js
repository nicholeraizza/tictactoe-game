import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import Tictactoe from './components/Tictactoe';
import HowToPlay from './components/HowToPlay';
import { GameProvider } from './components/GameContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider> {/* Wrap NavigationContainer with GameProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Tictactoe} options={{ headerShown: false }} />
          <Stack.Screen name="HowTo" component={HowToPlay} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}