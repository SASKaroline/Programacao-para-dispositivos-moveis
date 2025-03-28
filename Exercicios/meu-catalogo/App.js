import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Filmes from './Componentes/Filmes';
import Series from './Componentes/Series';

export default function App() {
  const ListaFilmes= [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg"
      },
      {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/250px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg"
      },
      {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
      },
      {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Poltergeist_%281982%29_-_poster.png/200px-Poltergeist_%281982%29_-_poster.png"
      }
      
  ];
  const ListaSeries= [
    {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/736x/5d/60/13/5d601398835d8b3e4ceae3a96850dec1.jpg"
      },
      {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://i.pinimg.com/236x/15/cc/88/15cc8856eb29f92689dd1268077db45e.jpg"
      },
      {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://i.pinimg.com/236x/a7/fe/ea/a7feea93b07da646f77be5d6c128eda2.jpg"
      }
      
  ]

  return (
    <ScrollView>
    <View style={styles.container}>
    <StatusBar style="auto" />

      <Text style={styles.titulo}>Filmes</Text>

      {
        ListaFilmes.map(
          filmes => {
            return (
              <Filmes 
              nome= {filmes.nome}
              ano= {filmes.ano}
              diretor= {filmes.diretor}
              tipo= {filmes.tipo}
              capa= {filmes.capa}
              />
            )
          }
        )
      };

      <Text style={styles.titulo}>Séries</Text>

      {
        ListaSeries.map(
          series => {
            return (
              <Series 
              nome= {series.nome}
              ano= {series.ano}
              diretor= {series.diretor}
              temporadas= {series.temporadas}
              capa= {series.capa}
              />
            )
          }
        )
      };

      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#deceff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  titulo: {
    paddingTop: 60,
    fontSize: 40,
    fontWeight: 600,
    color: "#1e0059",
    textAlign: "center"
},
});
