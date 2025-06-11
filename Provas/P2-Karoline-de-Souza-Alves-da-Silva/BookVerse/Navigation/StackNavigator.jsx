import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Biblioteca from '../screens/BibliotecaScreen';
import BookForm from '../screens/BookForm';
import BookDetails from '../screens/BookDetails';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="BibliotecaScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#1e1e1e' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen 
        name="BibliotecaScreen"
        component={Biblioteca} 
        options={{ title: 'Minha Biblioteca' }}
      />
      <Stack.Screen 
        name="BookForm" 
        component={BookForm} 
        options={{ title: 'Formulário de Livro' }} 
      />
      <Stack.Screen 
        name="BookDetails" 
        component={BookDetails} 
        options={{ title: 'Detalhes do Livro' }} 
      />
    </Stack.Navigator>
  );
}