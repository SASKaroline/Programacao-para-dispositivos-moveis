// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Button, Image} from 'react-native';

// Componente principal
// Ele deve retornar o que será rebderizado na tela (Template feito com JSX)
export default function App() {
  //Logica do meu componente

  const nome = "Karol linda"
  function concordo() {
    alert("Você concordou!")
  }

  // Retorno com JXS
  return (
    <View style={styles.container}>
      {/* Comentário dentro do template */}

      {/* Código JavaScript*/}
      <Text>{2 + 3}</Text>
      <Text>{nome}</Text>
      <Text style={{fontStyle: "italic"}}>Luquinhas é gay!</Text>
      <StatusBar style="auto" />
      <Button title='Concordo!' onPress={concordo}></Button>

      <Image source={{uri: 'https://i.pinimg.com/736x/26/b6/1c/26b61cc5bcf57151afecb632082e4413.jpg'}}
      style={{
        height: 600,
        width: 300
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8A2C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
