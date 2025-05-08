import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const jogadores = [
  {
    nome: "Luciano", numero: 10, posicao: "Atacante", idade: 31,
    imagem: "https://i.pinimg.com/736x/82/99/a6/8299a6f2427c9606f82f7d826a9de156.jpg"
  },
  {
    nome: "Calleri", numero: 9, posicao: "Atacante", idade: 30,
    imagem: "https://i.pinimg.com/736x/2b/d6/95/2bd695140104a02a68df0f69e051a14c.jpg"
  },
  {
    nome: "Lucas Moura", numero: 7, posicao: "Meia", idade: 31,
    imagem: "https://i.pinimg.com/736x/91/50/18/9150185210fbbadaae7fb9c1e3ebc388.jpg"
  },
  {
    nome: "Arboleda", numero: 5, posicao: "Zagueiro", idade: 32,
    imagem: "https://i.pinimg.com/736x/2f/a5/f4/2fa5f43d8c0723404613721fae350aab.jpg"
  },
  {
    nome: "Rafael", numero: 23, posicao: "Goleiro", idade: 33,
    imagem: "https://i.pinimg.com/736x/db/f6/d9/dbf6d918ae54d8ae0243298e509b8dba.jpg"
  }
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>#{item.numero} - {item.posicao}</Text>
            <Text style={[styles.info, { marginBottom: 22 }]}>Idade: {item.idade}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem }} style={styles.foto} />
        </Card>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 26, backgroundColor: '#f5f5f5' },
  foto: { height: 300, resizeMode: 'cover' },
  nome: { fontSize: 30, fontWeight: 'bold', color: '#7b1f3a', marginBottom: 4, paddingBottom: 10 },
  info: { fontSize: 16, fontWeight: '600', color: '#333' }
});
