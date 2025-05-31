import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import GenreChart from '../screens/GenreChart';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Livros" component={StackNavigator} />
        <Drawer.Screen name="Gráfico de Gêneros" component={GenreChart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

