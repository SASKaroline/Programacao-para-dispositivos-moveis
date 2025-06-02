import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Avatar.Icon size={100} icon="account" />
      <Text variant="titleLarge">Karoline Souza</Text>
      <Text>Email: karoline@email.com</Text>
      <Text>Cursos: ADS - IESB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
