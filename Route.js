import React, { useState, useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Gallery from './Screens/Gallery';

const Stack = createNativeStackNavigator();

function Route() {
    return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: 'Home', headerShown: false }} component={Home} />
      <Stack.Screen name="Gallery" options={{ headerShown: false }} component={Gallery} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Route