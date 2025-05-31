import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Card, Paragraph, Button } from 'react-native-paper';
import { deleteBook } from '../services/storage';

export default function BookDetails({ route, navigation }) {
  const { book } = route.params;

  const confirmDelete = () => {
    Alert.alert(
      'Excluir Livro',
      'Tem certeza que deseja excluir este livro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteBook(book.id);
            navigation.navigate('HomeScreen');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={book.title} subtitle={book.author} />
        <Card.Content>
          <Paragraph>Ano: {book.year}</Paragraph>
          <Paragraph>Gênero: {book.genre}</Paragraph>
          <Paragraph>Descrição: {book.description}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('BookForm', { book })}>
            Editar
          </Button>
          <Button onPress={confirmDelete} textColor="red">
            Excluir
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
