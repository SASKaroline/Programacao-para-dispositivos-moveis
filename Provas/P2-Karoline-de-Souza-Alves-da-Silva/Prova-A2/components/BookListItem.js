// components/BookListItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';

const DEFAULT_COVER = 'https://via.placeholder.com/100x150.png?text=Capa'; // Imagem placeholder

export default function BookListItem({ item, navigation, progresso }) {
  // 'progresso' é um valor numérico entre 0.0 e 1.0 (ex: 0.98 para 98%)
  // Ele é calculado na tela Biblioteca.js e passado para este componente.
  const { colors } = useTheme(); // Hook para usar as cores do tema definido no App.js

  const handlePress = () => {
    // Navega para a tela de detalhes do livro, passando o objeto 'item' (livro) como parâmetro
    navigation.navigate('BookDetails', { book: item });
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={[styles.card, { backgroundColor: colors.surface }]} // Fundo do card usa cor da superfície do tema
    >
      <Image
        source={{ uri: item.thumbnail || DEFAULT_COVER }} // Usa a capa do livro ou o placeholder
        style={styles.coverImage}
        onError={() => console.log(`Erro ao carregar imagem (ListItem): ${item.thumbnail}`)} // Opcional: para debug de imagem
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: colors.onSurface }]}>{item.title}</Text>
        <Text style={[styles.author, { color: colors.onSurfaceVariant }]}>{item.author}</Text>

        {item.statusLeitura && (
          <Text style={[styles.status, { color: colors.onSurfaceVariant }]}>
            Status: {item.statusLeitura}
          </Text>
        )}

        {/* Seção da Barra de Progresso e Porcentagem */}
        {/* Condicional: Só mostra se o status for "Lendo" e houver um progresso válido */}
        {item.statusLeitura === 'Lendo' && progresso !== null && progresso >= 0 && (
          <View style={styles.progressContainer}>
            <ProgressBar
              progress={progresso} // Valor do progresso (0.0 a 1.0)
              color={colors.primary} // Cor primária do tema para a barra
              style={styles.progressBar}
            />
            <Text style={[styles.progressText, { color: colors.onSurfaceVariant }]}>
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
    flexDirection: 'row', // Imagem ao lado das informações
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,    // Espaçamento vertical entre os itens
    marginHorizontal: 16, // Espaçamento horizontal (igual ao BookForm para consistência)
    // elevation: 2, // O PaperProvider já aplica elevação com base no tema/modo do Card
  },
  coverImage: {
    width: 70,             // Largura da imagem da capa
    height: 100,           // Altura da imagem da capa
    borderRadius: 4,       // Bordas levemente arredondadas para a capa
    marginRight: 12,       // Espaço entre a capa e as informações
    backgroundColor: '#555', // Cor de fundo para o placeholder da imagem
  },
  infoContainer: {
    flex: 1,               // Faz com que o container de informações ocupe o espaço restante
    justifyContent: 'center', // Centraliza o conteúdo verticalmente se houver espaço
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,       // Pequeno espaço abaixo do título
  },
  author: {
    fontSize: 14,
    marginBottom: 4,       // Espaço abaixo do autor
  },
  status: {
    fontSize: 12,
    // fontStyle: 'italic', // Opcional, se quiser o status em itálico
    marginBottom: 4,       // Espaço abaixo do status
  },
  progressContainer: {
    marginTop: 6,          // Espaço acima da barra de progresso
    flexDirection: 'row',  // Coloca a barra e o texto lado a lado
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