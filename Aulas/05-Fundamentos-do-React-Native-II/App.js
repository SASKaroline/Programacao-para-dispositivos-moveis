import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <Perfil 
        nome="Karoline"
        idade= {18}
        telefone= "(61)98543-0676"
        email= "karoline.s.silva@iesb.edu.br"
      />

      <Perfil 
        nome="Lucas"
        idade= {98}
        telefone= "(61)98563-0155"
        email= "lucas.n.rodrigues@iesb.edu.br"
      />

      <Perfil 
        nome="Thaís"
        idade= {19}
        telefone= "(61)98118-4569"
        email= "thais.c.bezerra@iesb.edu.br"
      /> */}

      <ListaComponente />

      <PrimeiroComponente />
      <JavaScriptComponente />

      <StatusBar style="auto" />
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
