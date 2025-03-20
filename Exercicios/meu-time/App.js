import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

  //Função para o botão
  function alertaGol(){
    alert("GOL DO CAMISA 9!!!!")
  }

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.title}>São Paulo Futebol Clube</Text>
      <Text style={styles.jogador}>Jonathan Calleri</Text>
      <Text style={styles.info}>Jonathan Calleri é um atacante argentino conhecido por sua garra, técnica e faro de gol. Revelado pelo All Boys, ganhou destaque no Boca Juniors antes de passar por clubes europeus e sul-americanos. No Brasil, tornou-se ídolo do São Paulo, onde se destacou por sua entrega em campo e gols decisivos. Com um estilo de jogo combativo e oportunismo dentro da área, Calleri é peça fundamental no ataque tricolor e querido pela torcida.</Text>
      
      <View style={styles.card}>

      <Text style={styles.infoCard}>Títulos: Copa do Brasil (2023) e Supercopa Rei (2024)</Text>
      <Text style={styles.infoCard}>Jogos com a camisa tricolor: 134 jogos </Text>
      <Text style={styles.infoCard}>Gols pelo SPFC: 56 gols</Text>
      <Text style={styles.infoCard}>Tempo no São Paulo: Duas passagens (2016 e desde 2021)</Text>
      <Text style={styles.infoCard}>Posição: Centroavante.</Text>

      </View>

      <View style={styles.imageContiner}>

        <Image source={{ uri: "https://i.pinimg.com/736x/9c/65/68/9c6568a934e1a45d49a374ea9ca4da98.jpg"}} style={styles.image}/>
        <Image source={{ uri: "https://i.pinimg.com/736x/a4/50/f8/a450f8ad1399cc2f19ccd24a59a7f3cb.jpg"}} style={styles.image}/>
        <Image source={{ uri: "https://i.pinimg.com/736x/a7/97/eb/a797ebb71cecce2f137498d9c178a1e9.jpg"}} style={styles.image}/>
        <Image source={{ uri: "https://i.pinimg.com/736x/ca/4e/07/ca4e07c647c4e4b2c22ead21ffb2380d.jpg"}} style={styles.image}/>
        <Image source={{ uri: "https://i.pinimg.com/736x/8a/a4/62/8aa462dc02946998f9483e9f362c918e.jpg"}} style={styles.image}/>

      </View>

      <View style={styles.buttonContainer}>

        <Button title="GOLLL!!!!" onPress={alertaGol} color="#9f0000" />

      </View>

      <StatusBar style="auto" />
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#9f0000",
  },

  jogador: {
    fontSize: 28,
    fontWeight: "semibold",
    marginBottom: 10,
    color: "#9f0000",
  },

  info: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: "justify",
  },

  infoCard: {
    fontSize: 15,
    marginBottom: 5,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },

  card: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#9f0000",
  },

  imageContiner: {
    flexDirection: "column",
    marginVertical: 10,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  image: {
    width: 300,
    height: 300,
    margin: 15,
  },

  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#000",
  }
});
