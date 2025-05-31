import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import BookList from './BookList';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="BookVerse" />
      </Appbar.Header>
      <BookList navigation={navigation} />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('BookForm')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
