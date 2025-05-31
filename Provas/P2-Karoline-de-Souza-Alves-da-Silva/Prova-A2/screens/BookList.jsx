import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { getBooks } from '../services/storage';

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadBooks();
    });
    return unsubscribe;
  }, [navigation]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const renderItem = ({ item }) => (
    <>
      <List.Item
        title={item.title}
        description={item.author}
        onPress={() => navigation.navigate('BookDetails', { book: item })}
      />
      <Divider />
    </>
  );

  return <FlatList data={books} keyExtractor={(item) => item.id} renderItem={renderItem} />;
}
