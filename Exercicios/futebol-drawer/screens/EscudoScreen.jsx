import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const time = {
  nome: "São Paulo FC",
  escudo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/São_Paulo_Futebol_Clube.png",
  fundacao: "25 de janeiro de 1930",
  estadio: "Morumbi",
  mascote: "Santo Paulo",
  cores: ["Vermelho", "Preto", "Branco"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: time.escudo }} />
        <Card.Content>
          <Title>{time.nome}</Title>
          <Paragraph>Fundado em: {time.fundacao}</Paragraph>
          <Paragraph>Estádio: {time.estadio}</Paragraph>
          <Paragraph>Mascote: {time.mascote}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  }
});
