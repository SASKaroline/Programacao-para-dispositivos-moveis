// screens/BookDetails.jsx
import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { Text, Card, Divider, Button, useTheme, Snackbar } from 'react-native-paper';
import { deleteBook } from '../services/storage'; // Certifique-se que o caminho está correto

export default function BookDetails({ route, navigation }) {
  const { colors } = useTheme();
  const { book } = route.params || {};

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  if (!book || !book.id) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.error }]}>Livro não encontrado ou dados inválidos.</Text>
        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20, borderColor: colors.primary }}
          labelStyle={{ color: colors.primary }}
          icon="arrow-left"
        >
          Voltar
        </Button>
      </View>
    );
  }

  const handleEdit = () => {
    navigation.navigate('BookForm', { book: book });
  };

  // ============== INÍCIO DA CORREÇÃO IMPORTANTE ==============
  // Certifique-se de que a linha abaixo está EXATAMENTE assim:
  const handleDelete = async () => {
  // ============== FIM DA CORREÇÃO IMPORTANTE ================
    try {
      await deleteBook(book.id);
      setSnackbarMessage('Livro excluído com sucesso!');
      setSnackbarVisible(true);
      setTimeout(() => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.replace('Biblioteca'); // Ajuste se sua tela de lista principal tiver outro nome
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      setSnackbarMessage('Erro ao excluir o livro.');
      setSnackbarVisible(true);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Confirmar Exclusão",
      `Tem certeza que deseja excluir o livro "${book.title}"? Esta ação não pode ser desfeita.`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: handleDelete, style: "destructive" }
      ]
    );
  };

  // Estilos que utilizam o hook useTheme()
  const componentStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.onSurface,
      textAlign: 'center',
      marginBottom: 12,
    },
    divider: {
      backgroundColor: colors.outline,
      marginBottom: 16,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 12,
    },
    thumbnail: {
      width: '100%',
      height: 280,
      resizeMode: 'contain',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      backgroundColor: colors.surfaceDisabled || '#333', // Fundo para imagem
    },
    thumbnailPlaceholder: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 280, // Mesma altura da imagem
      width: '100%',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      backgroundColor: colors.surfaceDisabled || '#333',
    },
    thumbnailPlaceholderText: {
      color: colors.onSurfaceVariant,
    },
    label: {
      color: colors.onSurfaceVariant,
      fontSize: 15,
      marginTop: 12,
    },
    value: {
      color: colors.onSurface,
      fontSize: 17,
    },
    description: {
      color: colors.onSurfaceVariant,
      fontSize: 15,
      marginTop: 8,
      lineHeight: 22,
    },
    buttonContainer: {
      marginTop: 20,
      marginBottom: 10,
    },
    button: {
      marginVertical: 8,
    },
    snackbar: {
      backgroundColor: colors.inverseSurface, // Cor de fundo correta para Snackbar
    },
    // Não precisa de snackbarText aqui, pois o texto dentro do Snackbar será estilizado diretamente
  });

  return (
    <>
      <ScrollView style={componentStyles.container}>
        <Text style={componentStyles.header}>{book.title}</Text>
        <Divider style={componentStyles.divider} />

        <Card style={componentStyles.card} mode="elevated">
          {book.thumbnail ? (
            <Image source={{ uri: book.thumbnail }} style={componentStyles.thumbnail} />
          ) : (
            <View style={componentStyles.thumbnailPlaceholder}>
                <Text style={componentStyles.thumbnailPlaceholderText}>Sem capa</Text>
            </View>
          )}
          <Card.Content style={{paddingTop: 16}}>
            <Text style={componentStyles.label}>Autor:</Text>
            <Text style={componentStyles.value}>{book.author || 'N/A'}</Text>

            <Text style={componentStyles.label}>Ano:</Text>
            <Text style={componentStyles.value}>{book.year || 'N/A'}</Text>

            <Text style={componentStyles.label}>Gênero:</Text>
            <Text style={componentStyles.value}>{book.genre || 'N/A'}</Text>

            <Text style={componentStyles.label}>Status de Leitura:</Text>
            <Text style={componentStyles.value}>{book.statusLeitura || 'N/A'}</Text>

            {book.statusLeitura === 'Lendo' && book.progresso ? ( // Adicionado verificação de `book.progresso`
              <>
                <Text style={componentStyles.label}>Progresso:</Text>
                <Text style={componentStyles.value}>{book.progresso}</Text>
              </>
            ) : null}

            <Text style={componentStyles.label}>Descrição:</Text>
            <Text style={componentStyles.description}>{book.description || 'Nenhuma descrição fornecida.'}</Text>
          </Card.Content>
        </Card>

        <View style={componentStyles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleEdit}
            style={componentStyles.button}
            icon="pencil"
            buttonColor={colors.primary}
            textColor={colors.onPrimary}
          >
            Editar Livro
          </Button>

          <Button
            mode="outlined"
            onPress={confirmDelete}
            style={[componentStyles.button, {borderColor: colors.error}]}
            icon="delete"
            textColor={colors.error} // Em Paper 5, textColor é preferido sobre labelStyle para cor
          >
            Excluir Livro
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.goBack()}
            style={componentStyles.button}
            icon="arrow-left"
            textColor={colors.primary} // Em Paper 5, textColor é preferido
          >
            Voltar
          </Button>
        </View>
      </ScrollView>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={componentStyles.snackbar} // backgroundColor já definido em componentStyles.snackbar
      >
        {/* Texto do Snackbar pegará a cor correta do tema (onInverseSurface) */}
        {snackbarMessage}
      </Snackbar>
    </>
  );
}

// Estilos globais ou de erro que não dependem do tema
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom:10,
  },
});