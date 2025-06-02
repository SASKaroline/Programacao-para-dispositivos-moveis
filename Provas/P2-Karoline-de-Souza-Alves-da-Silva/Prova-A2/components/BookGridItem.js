// components/BookGridItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';

// Supondo que você tenha uma imagem de capa ou um placeholder
const DEFAULT_COVER = 'https://via.placeholder.com/150x225.png?text=Capa'; // Pode ser um pouco maior para grid

export default function BookGridItem({ item, navigation }) {
  const { colors } = useTheme(); // Para usar cores do tema, se aplicável

  // A lógica de progresso já vem calculada de Biblioteca.js
  const progresso =
    item.statusLeitura === 'Lendo' && item.progresso
      ? parseFloat(item.progresso.replace('%', '')) / 100
      : null;

  // Função para navegar para detalhes ou formulário de edição
  const handlePress = () => {
    // Navega para BookForm para edição, ou poderia ser para uma tela de detalhes do livro
    navigation.navigate('BookForm', { bookId: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image
        source={{ uri: item.coverImage || DEFAULT_COVER }}
        style={styles.coverImage}
        resizeMode="cover" // Garante que a imagem cubra a área designada
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: 'white' }]} numberOfLines={2}>
          {item.title}
        </Text>
        {item.author ? (
          <Text style={[styles.author, { color: '#B0B0B0' }]} numberOfLines={1}>
            {item.author}
          </Text>
        ) : null}
        {item.statusLeitura && (
          <Text style={[styles.status, { color: '#C0C0C0' }]} numberOfLines={1}>
            {item.statusLeitura}
          </Text>
        )}
        {progresso !== null && (
          <View style={styles.progressContainer}>
            <ProgressBar
              progress={progresso}
              color={colors.primary || '#BB86FC'}
              style={styles.progressBar}
            />
            {/* Opcional: remover o texto de % se ficar muito apertado no grid */}
            {/* <Text style={[styles.progressText, { color: '#C0C0C0' }]}>
              {Math.round(progresso * 100)}%
            </Text> */}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, // Importante para que o FlatList com numColumns distribua o espaço
    flexDirection: 'column',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    margin: 6, // Margem entre os itens da grade
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center', // Centraliza a imagem e o container de info
  },
  coverImage: {
    width: '100%', // Ocupa toda a largura do card
    aspectRatio: 2 / 3, // Proporção comum para capas de livro (largura/altura)
    borderRadius: 4,
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'center', // Centraliza o texto dentro do container de info
    width: '100%', // Garante que o container de texto ocupe a largura
  },
  title: {
    fontSize: 14, // Ligeiramente menor para caber melhor no grid
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 3,
  },
  status: {
    fontSize: 11,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 4,
  },
  progressContainer: {
    width: '90%', // Barra de progresso um pouco menor que a largura total do texto
    marginTop: 2,
    alignItems: 'center', // Centraliza a barra de progresso
  },
  progressBar: {
    width: '100%',
    height: 6, // Barra um pouco mais fina
    borderRadius: 3,
  },
  progressText: { // Se for usar, pode precisar ajustar o tamanho
    fontSize: 10,
    marginTop: 2, // Espaço entre a barra e o texto, se a barra estiver acima
  },
});