import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../../BookVerse/screens/HomeScreen';
import StackNavigator from './StackNavigator';
import Resenhas from '../screens/ResenhasScreen';
import Perfil from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() { 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false, 

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Biblioteca') {
            iconName = focused ? 'book-multiple' : 'book-multiple-outline';
          } else if (route.name === 'Resenhas') {
            iconName = focused ? 'message-draw' : 'message-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#BB86FC',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Biblioteca" component={StackNavigator} />
      <Tab.Screen name="Resenhas" component={Resenhas} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}