import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const jogadores = [
  {
    nome: "Luciano",
    numero: 10,
    posicao: "Atacante",
    idade: 31,
    imagem: "https://s2-ge.glbimg.com/L7nhDgQqTxzGBnujQUKUpvhf6-Q=/0x0:1045x1523/1000x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2023/07/03/luciano_sao_paulo_jose_trindade_agif.jpg"
  },
  {
    nome: "Calleri",
    numero: 9,
    posicao: "Atacante",
    idade: 30,
    imagem: "https://conteudo.imguol.com.br/c/esporte/f8/2023/08/27/calleri-durante-sao-paulo-x-botafogo-pelo-campeonato-brasileiro-1693172741824_v2_450x600.jpg"
  },
  {
    nome: "Lucas Moura",
    numero: 7,
    posicao: "Meia",
    idade: 31,
    imagem: "https://tntsports.com.br/__export/1692645261262/sites/esporteinterativo/img/2023/08/21/lucas_moura_spfc.jpg_423682103.jpg"
  },
  {
    nome: "Arboleda",
    numero: 5,
    posicao: "Zagueiro",
    idade: 32,
    imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=1218,height=800,quality=75,format=webp/uploads/2023/05/Arboleda-Sao-Paulo-Lance-1.jpg"
  },
  {
    nome: "Rafael",
    numero: 23,
    posicao: "Goleiro",
    idade: 33,
    imagem: "https://s2-ge.glbimg.com/YqK3RBg9crjP7cKeb8YIlZT8poc=/0x0:1200x1800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_8f40bfb9f6f04b6ab2e7e8b9f690d0e1/internal_photos/bs/2023/X/I/ZgQ1dUQHicJrctnBb9WA/rafael.jpg"
  }
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Title title={item.nome} subtitle={`#${item.numero} - ${item.posicao}`} />
          <Card.Content>
            <Paragraph>Idade: {item.idade}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem }} />
        </Card>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff'
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5'
  }
});
