// BookDetails.js (estilo moderno com proteção de dados)
import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Text, Card, Divider, Button } from 'react-native-paper';

export default function BookDetails({ route, navigation }) {
  const { book } = route.params || {};

  if (!book) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Livro não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{book.title}</Text>
      <Divider style={styles.divider} />

      <Card style={styles.card} mode="contained">
        {book.thumbnail && (
          <Image source={{ uri: book.thumbnail }} style={styles.thumbnail} />
        )}
        <Card.Content>
          <Text style={styles.label}>Autor:</Text>
          <Text style={styles.value}>{book.author}</Text>

          <Text style={styles.label}>Ano:</Text>
          <Text style={styles.value}>{book.year}</Text>

          <Text style={styles.label}>Gênero:</Text>
          <Text style={styles.value}>{book.genre}</Text>

          <Text style={styles.label}>Status de Leitura:</Text>
          <Text style={styles.value}>{book.statusLeitura}</Text>

          {book.statusLeitura === 'Lendo' && book.progresso && (
            <>
              <Text style={styles.label}>Progresso:</Text>
              <Text style={styles.value}>{book.progresso}</Text>
            </>
          )}

          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.description}>{book.description}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        icon="arrow-left"
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    backgroundColor: '#333',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    paddingBottom: 16,
  },
  thumbnail: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  label: {
    color: '#aaa',
    fontSize: 15,
    marginTop: 12,
  },
  value: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
    fontSize: 15,
    marginTop: 12,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'center',
    borderColor: '#03dac6',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
  },
});
