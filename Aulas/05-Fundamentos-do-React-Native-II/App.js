import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';

export default function App() {
  const listaAtletas= [
  {
    nome: "Calleri",
    idade: 31,
    numero: 9,
    imagem: "https://i.pinimg.com/736x/99/bc/c1/99bcc184074ec58f35f91f5824ff18c5.jpg"
  },
  {
    nome: "Arboleda",
    idade: 33,
    numero: 5,
    imagem: "https://i.pinimg.com/736x/67/91/01/67910122ec235f33c9cb607fd92d3afe.jpg"
  }
  ,
  {
    nome: "Lucas Moura",
    idade: 32,
    numero: 7,
    imagem: "https://i.pinimg.com/736x/f1/5c/ba/f15cbaf0fc74942495e35ce084ad83de.jpg"
  }
  ]


  return (
    <ScrollView>
    <View style={styles.container}>

      <StatusBar style="auto" />

      {
        listaAtletas.map(
          atleta => {
            return (
              <Atleta 
              nome= {atleta.nome}
              idade= {atleta.idade}
              numero= {atleta.numero}
              imagem= {atleta.imagem}/>
            )
          }
        )
      }
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#deceff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
