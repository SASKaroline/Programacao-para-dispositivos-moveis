import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(num)) numeros.push(num);
    }
    const jogo = numeros.sort((a, b) => a - b).join(' - ');
    setJogosMegaSena([jogo, ...jogosMegaSena]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" buttonColor="#7E57C2" textColor="#fff" onPress={gerarJogo}>Gerar Jogo</Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content><Text>{item}</Text></Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F3E5F5' },
  card: { marginVertical: 8, backgroundColor: '#E1BEE7' },
});
