import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EscudoScreen from '../screens/EscudoScreen';
import JogadoresScreen from '../screens/JogadoresScreen';
import TitulosScreen from '../screens/TitulosScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#d50000' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#d50000',
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Escudo"
        component={EscudoScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="shield" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Jogadores"
        component={JogadoresScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Títulos"
        component={TitulosScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}