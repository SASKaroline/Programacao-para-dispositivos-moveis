import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const time = {
  nome: "São Paulo FC",
  escudo: "https://i.pinimg.com/736x/87/d8/c7/87d8c79d1689b41eb788cb8179d9f42f.jpg",
  fundacao: "25 de janeiro de 1930",
  estadio: "Morumbi",
  mascote: "Santo Paulo",
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: time.escudo }} style={styles.escudo} />
        <Card.Content>
          
          <Card.Content>
            <Text variant="titleLarge" style={{paddingTop: 20, fontSize: 30, fontWeight: 'bold', color: '#7b1f3a'}}>{time.nome}</Text>
            <Text variant="bodyMedium" style={{paddingTop: 10}}>Fundado em: {time.fundacao}</Text>
            <Text variant="bodyMedium">Estádio: {time.estadio}</Text>
            <Text variant="bodyMedium">Mascote: {time.mascote}</Text>
          </Card.Content>

        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  card: { elevation: 4 },
  escudo: { resizeMode: 'contain', backgroundColor: '#fff', height: 450 }
});
