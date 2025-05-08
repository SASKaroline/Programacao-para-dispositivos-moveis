import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1977, 1986, 1991, 2006, 2007, 2008]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1992, 1993, 2005]
  },
  {
    nome: "Copa do Mundo de Clubes",
    anos: [1992, 1993, 2005]
  },
  {
    nome: "Copa Sul-Americana",
    anos: [2012]
  },
  {
    nome: "Copa do Brasil",
    anos: [2023]
  }
];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Anos: {item.anos.join(', ')}</Paragraph>
          </Card.Content>
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
