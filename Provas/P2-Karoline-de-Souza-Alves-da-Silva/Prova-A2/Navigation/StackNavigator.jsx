import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Biblioteca';
import BookForm from '../screens/BookForm';
import BookDetails from '../screens/BookDetails';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'BookVerse' }} />
      <Stack.Screen name="BookForm" component={BookForm} options={{ title: 'Formulário de Livro' }} />
      <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Detalhes do Livro' }} />
    </Stack.Navigator>
  );
}
