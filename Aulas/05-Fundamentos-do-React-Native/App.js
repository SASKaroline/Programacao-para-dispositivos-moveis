import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <JavaScriptComponente />
      
      <Perfil
        nome="Karoline"
        sobrenome="Silva"
        idade={18}
      />

      <Perfil
        nome="Lucas"
        sobrenome="Rodrigues"
        idade={58}
      />

      <Perfil
        nome="Taylor"
        sobrenome="Swift"
        idade={34}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
