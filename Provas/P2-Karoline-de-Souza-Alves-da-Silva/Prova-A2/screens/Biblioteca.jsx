// Biblioteca.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'; // Adicionado StyleSheet
import { SegmentedButtons, FAB, ProgressBar, Text, useTheme } from 'react-native-paper'; // Adicionado useTheme
import { getBooks } from '../services/storage';
import BookListItem from '../components/BookListItem'; // Presumo que você irá estilizá-lo
import BookGridItem from '../components/BookGridItem'; // Presumo que você irá estilizá-lo

export default function Biblioteca({ navigation }) {
  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const { colors } = useTheme(); // Para usar cores do tema, se disponível, ou defina manualmente

  useEffect(() => {
    const load = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    const unsubscribe = navigation.addListener('focus', load);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => {
    const progresso =
      item.statusLeitura === 'Lendo' && item.progresso
        ? parseFloat(item.progresso.replace('%', '')) / 100
        : null;

    // Passando o viewMode para os itens, caso eles precisem se adaptar
    const commonProps = { item, navigation, viewMode };

    return viewMode === 'list' ? (
      // O BookListItem agora será responsável por seu próprio card e status/progresso
      <BookListItem {...commonProps} progresso={progresso} />
    ) : (
      <BookGridItem {...commonProps} />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: '#121212' }]}>
      {/* Para SegmentedButtons, o ideal é que ele herde do tema escuro do PaperProvider */}
      {/* Se não, você pode precisar de estilos mais específicos ou um wrapper */}
      <View style={styles.segmentedButtonContainer}>
        <SegmentedButtons
          value={viewMode}
          onValueChange={setViewMode}
          buttons={[
            { value: 'list', label: 'Lista', style: styles.buttonStyle },
            { value: 'grid', label: 'Grade', style: styles.buttonStyle },
          ]}
          // Tente adicionar estas props para melhor visual em tema escuro
          // style={styles.segmentedButtons} // Estilo para o container dos botões
          // theme={{ colors: { primary: 'white', outline: 'gray', surface: '#333' } }} // Exemplo
        />
      </View>
      <FlatList
        key={viewMode} // Importante para o numColumns funcionar corretamente ao trocar
        data={books}
        keyExtractor={(item) => item.id.toString()} // Garanta que seja string
        renderItem={renderItem}
        numColumns={viewMode === 'grid' ? 2 : 1} // Ajustado para 2 colunas no grid para melhor visual
        contentContainerStyle={styles.listContent}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: colors.primary || '#BB86FC' }]} // Cor do FAB
        color={colors.onPrimary || 'black'} // Cor do ícone do FAB
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
    backgroundColor: '#1E1E1E', // Um pouco mais claro que o fundo para destacar
  },
  // segmentedButtons: { // Estilos para o componente SegmentedButtons em si
  //   backgroundColor: '#2C2C2C', // Exemplo de cor de fundo para os botões
  // },
  buttonStyle: { // Estilo para cada botão individual dentro do SegmentedButtons
    // borderColor: 'gray', // Cor da borda
    // backgroundColor: '#333', // Cor de fundo quando não selecionado
  },
  listContent: {
    paddingHorizontal: 8, // Espaçamento nas laterais da lista
    paddingBottom: 80, // Espaço para o FAB não sobrepor o último item
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  // Os estilos de status e progresso serão movidos para dentro do BookListItem
});