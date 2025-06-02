import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { getBooks } from '../services/storage';
import BookListItem from '../components/BookListItem';
import GenreChart from './GenreChart';

export default function Favoritos({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const load = async () => {
      const allBooks = await getBooks();
      setFavorites(allBooks.filter(book => book.favorite));
    };
    load();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text variant="titleLarge">Meus Favoritos</Text>
      <GenreChart books={favorites} />
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookListItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
