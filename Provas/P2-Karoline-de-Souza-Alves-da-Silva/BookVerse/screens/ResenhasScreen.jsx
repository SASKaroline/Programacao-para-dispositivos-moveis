import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Card, Appbar, useTheme, Snackbar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getBooks, updateBook } from '../services/storage';

function BookReviewCard({ item, onSaveReview }) {
  const { colors } = useTheme();
  const [review, setReview] = useState(item.resenha || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await onSaveReview(item, review);
    setIsSaving(false);
  };

  return (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <Card.Title
        title={item.title}
        subtitle={item.author}
        titleStyle={{ color: colors.onSurface }}
        subtitleStyle={{ color: colors.onSurfaceVariant }}
      />
      <Card.Content>
        <TextInput
          label="Sua Resenha"
          multiline
          value={review}
          onChangeText={setReview}
          style={[styles.textInput, { backgroundColor: colors.surface }]}
          mode="outlined"
          outlineColor={colors.outline}
          activeOutlineColor={colors.primary}
          textColor={colors.onSurface}
        />
        <Button
          mode="contained"
          onPress={handleSave}
          style={styles.button}
          disabled={isSaving}
          loading={isSaving}
          icon="content-save"
          buttonColor={colors.primary}
        >
          Salvar Resenha
        </Button>
      </Card.Content>
    </Card>
  );
}

export default function ResenhasScreen() {
  const { colors } = useTheme();
  const [books, setBooks] = useState([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const data = await getBooks();
        setBooks(data || []);
      };
      load();
    }, [])
  );

  const handleSaveReview = async (book, reviewText) => {
    await updateBook({ ...book, resenha: reviewText });
    setSnackbarVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Appbar.Header style={{ backgroundColor: colors.surface }} elevated>
        <Appbar.Content title="Minhas Resenhas" titleStyle={{fontWeight: 'bold'}} />
      </Appbar.Header>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookReviewCard item={item} onSaveReview={handleSaveReview} />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: colors.onSurfaceVariant }]}>
            Nenhum livro na sua biblioteca para adicionar uma resenha.
          </Text>
        }
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={{ backgroundColor: colors.onSurface, marginBottom: 80 }}
        theme={{ colors: { inverseSurface: colors.surface } }}
      >
        <Text style={{color: colors.surface}}>Resenha salva com sucesso!</Text>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  textInput: {
    marginTop: 8,
  },
  button: {
    marginTop: 12,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});