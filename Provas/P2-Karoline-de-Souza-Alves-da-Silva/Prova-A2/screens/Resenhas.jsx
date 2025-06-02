import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { getBooks, updateBook } from '../services/storage';

export default function Resenhas() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    load();
  }, []);

  const handleSaveReview = async (book, review) => {
    await updateBook({ ...book, resenha: review });
  };

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.title} />
          <Card.Content>
            <TextInput
              label="Resenha"
              multiline
              defaultValue={item.resenha || ''}
              onChangeText={(text) => handleSaveReview(item, text)}
            />
          </Card.Content>
        </Card>
      )}
    />
  );
}
