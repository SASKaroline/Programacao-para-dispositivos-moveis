// components/BookListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';

const DEFAULT_COVER = 'https://via.placeholder.com/100x150.png?text=Capa';

export default function BookListItem({ item, navigation, progresso }) {
  const { colors } = useTheme();

  // Função para navegar para detalhes
  const handlePress = () => {
    // Linha Alterada Abaixo:
    navigation.navigate('BookDetails', { book: item }); // <--- CORREÇÃO AQUI
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image
        source={{ uri: item.thumbnail || DEFAULT_COVER }} // Usando item.thumbnail como discutido anteriormente
        style={styles.coverImage}
        // onError={() => console.log(`Erro ao carregar imagem (ListItem): ${item.thumbnail || DEFAULT_COVER}`)}
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
              color={colors.primary || '#BB86FC'}
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

// Seus estilos (styles) permanecem os mesmos
// ... (copie seus estilos aqui)
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  coverImage: {
    width: 70,
    height: 100,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: 'grey', // Para debug, como sugerido antes
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
    flex: 1,
    height: 8,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    marginLeft: 8,
  },
});