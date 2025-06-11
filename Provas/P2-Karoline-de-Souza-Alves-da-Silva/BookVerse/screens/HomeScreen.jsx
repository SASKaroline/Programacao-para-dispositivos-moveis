import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBooks } from '../services/storage';
import { useFocusEffect } from '@react-navigation/native';
import GenreChart from '../components/GenreChart';

const META_KEY = '@metas';

export default function HomeScreen() {
  const [lidos, setLidos] = useState(0);
  const [paginasLidas, setPaginasLidas] = useState(0);
  const [metaMensal, setMetaMensal] = useState('');
  const [metaAnual, setMetaAnual] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [allBooks, setAllBooks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const carregar = async () => {
        const livros = await getBooks();
        if (!livros) return;

        setAllBooks(livros);

        const lidosTotal = livros.filter(l => l.statusLeitura === 'Lido').length;
        setLidos(lidosTotal);

        const paginas = livros.reduce((acc, livro) => {
          const total = parseInt(livro.pageCount || '0');
          const progressoParcial = parseInt(livro.progresso?.match(/\d+/)?.[0] || '0');
          if (livro.statusLeitura === 'Lido') {
            acc += total;
          } else if (livro.statusLeitura === 'Lendo') {
            acc += progressoParcial;
          }
          return acc;
        }, 0);
        setPaginasLidas(paginas);

        const metasSalvas = await AsyncStorage.getItem(META_KEY);
        if (metasSalvas) {
          const metas = JSON.parse(metasSalvas);
          setMetaMensal(metas.mensal);
          setMetaAnual(metas.anual);
        } else {
          setMetaMensal('5');
          setMetaAnual('30');
        }
      };
      carregar();
    }, [])
  );

  const salvarMetas = async () => {
    const metas = { mensal: metaMensal, anual: metaAnual };
    await AsyncStorage.setItem(META_KEY, JSON.stringify(metas));
    setEditMode(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      <Card style={styles.block} mode="contained">
        <Card.Title title="Metas de Leitura" titleStyle={styles.blockTitle} />
        <Card.Content>
          <Text style={styles.label}>Livros Lidos:</Text>
          <Text style={styles.value}>{lidos}</Text>
          {editMode ? (
            <>
              <TextInput
                label="Meta Mensal"
                value={metaMensal}
                onChangeText={setMetaMensal}
                keyboardType="numeric"
                style={styles.input}
              />
              <TextInput
                label="Meta Anual"
                value={metaAnual}
                onChangeText={setMetaAnual}
                keyboardType="numeric"
                style={styles.input}
              />
              <Button mode="contained" onPress={salvarMetas} style={styles.button}>
                Salvar Metas
              </Button>
            </>
          ) : (
            <>
              <Text style={styles.label}>Meta Mensal: <Text style={styles.value}>{metaMensal}</Text></Text>
              <Text style={styles.label}>Meta Anual: <Text style={styles.value}>{metaAnual}</Text></Text>
              <Button onPress={() => setEditMode(true)} style={styles.button} mode="outlined">
                Editar Metas
              </Button>
            </>
          )}
        </Card.Content>
      </Card>

      <Card style={styles.block} mode="contained">
        <Card.Title title="Total de Páginas Lidas" titleStyle={styles.blockTitle} />
        <Card.Content>
          <Text style={styles.pagesRead}>{paginasLidas} páginas</Text>
        </Card.Content>
      </Card>
      
      <GenreChart books={allBooks} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  block: {
    marginBottom: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
  },
  blockTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    color: '#aaa',
    fontSize: 15,
    marginTop: 8,
  },
  value: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 12,
    backgroundColor: '#2a2a2a',
  },
  button: {
    marginTop: 16,
  },
  pagesRead: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7011cf',
    textAlign: 'center',
    marginVertical: 8,
  },
});