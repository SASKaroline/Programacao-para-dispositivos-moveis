// components/BookListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper'; // Adicionado useTheme

// Supondo que você tenha uma imagem de capa ou um placeholder
const DEFAULT_COVER = 'https://via.placeholder.com/100x150.png?text=Capa';

export default function BookListItem({ item, navigation, progresso }) {
  const { colors } = useTheme(); // Para usar cores do tema, se aplicável

  // Função para navegar para detalhes ou formulário de edição
  const handlePress = () => {
    navigation.navigate('BookForm', { bookId: item.id }); // Ou 'BookDetails'
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image
        source={{ uri: item.coverImage || DEFAULT_COVER }}
        style={styles.coverImage}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: 'white' }]}>{item.title}</Text>
        <Text style={[styles.author, { color: '#B0B0B0' }]}>{item.author}</Text>
        {item.statusLeitura && (
          <Text style={[styles.status, { color: '#C0C0C0' }]}>
            Status: {item.statusLeitura}
          </Text>
        )}
        {progresso !== null && (
          <View style={styles.progressContainer}>
            <ProgressBar
              progress={progresso}
              color={colors.primary || '#BB86FC'} // Cor da barra de progresso
              style={styles.progressBar}
            />
            <Text style={[styles.progressText, { color: '#C0C0C0' }]}>
              {Math.round(progresso * 100)}%
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E', // Cor de fundo do card, similar ao exemplo
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8, // Ajustado para ter margem dos dois lados se estiver no container da lista
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  coverImage: {
    width: 70, // Ajuste conforme necessário
    height: 100, // Ajuste conforme necessário
    borderRadius: 4,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    marginBottom: 6,
  },
  status: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  progressContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1, // Para a barra ocupar o espaço disponível
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    marginLeft: 8,
  },
});