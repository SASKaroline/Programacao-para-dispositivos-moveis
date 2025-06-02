import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import StackNavigator from './StackNavigator';
import Biblioteca from '../screens/Biblioteca';
import Favoritos from '../screens/Favoritos';
import Resenhas from '../screens/Resenhas';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Biblioteca" component={StackNavigator} />
        <Drawer.Screen name="Favoritos" component={Favoritos} />
        <Drawer.Screen name="Resenhas" component={Resenhas} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
