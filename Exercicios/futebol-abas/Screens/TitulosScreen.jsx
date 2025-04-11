import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'

export default function TitulosScreen() {

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
      nome: "Copa do Brasil",
      anos: [2023]
    },
    {
      nome: "Mundial de Clubes",
      anos: [1992, 1993, 2005]
    }
  ];

  return (
    <FlatList style={{ paddingTop: 20}}
      data={titulos}
      contentContainerStyle={{ padding: 16 }}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.anos}>{item.anos.join(', ')}</Text>
          </View>
        </Card>
      )}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8e24aa',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardContent: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3e5f5',
    marginBottom: 8,
  },
  anos: {
    fontSize: 14,
    color: '#e1bee7',
  }
})