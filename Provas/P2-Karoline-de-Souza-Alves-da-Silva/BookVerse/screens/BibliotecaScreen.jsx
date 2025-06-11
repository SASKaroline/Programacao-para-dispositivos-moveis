import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SegmentedButtons, FAB, ProgressBar, useTheme } from 'react-native-paper';
import { getBooks } from '../services/storage';
import BookListItem from '../components/BookListItem';
import BookGridItem from '../components/BookGridItem';

export default function Biblioteca({ navigation }) {
  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const { colors } = useTheme();

  useEffect(() => {
    const load = async () => {
      const data = await getBooks();
      setBooks(Array.isArray(data) ? data : []);
    };

    const unsubscribe = navigation.addListener('focus', load);
    load(); 

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => {
    const progresso =
      item.statusLeitura === 'Lendo' && item.progresso
        ? parseFloat(String(item.progresso).replace('%', '')) / 100
        : null;

    const commonProps = { item, navigation, viewMode };

    return viewMode === 'list' ? (
      <BookListItem {...commonProps} progresso={progresso} />
    ) : (
      <BookGridItem {...commonProps} />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: '#121212' }]}>
      <View style={styles.segmentedButtonContainer}>
        <SegmentedButtons
          value={viewMode}
          onValueChange={setViewMode}
          buttons={[
            { value: 'list', label: 'Lista', style: styles.buttonStyle },
            { value: 'grid', label: 'Grade', style: styles.buttonStyle },
          ]}
        />
      </View>
      <FlatList
        key={viewMode}
        data={books}
        keyExtractor={(item) => String(item.id)} 
        renderItem={renderItem}
        numColumns={viewMode === 'grid' ? 3 : 1}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
            <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                Nenhum livro na biblioteca.
            </Text>
        }
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: colors.primary || '#BB86FC' }]}
        color={colors.onPrimary || 'black'}
        onPress={() => navigation.navigate('BookForm')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segmentedButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#1E1E1E',
  },
  buttonStyle: {},
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 80,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});