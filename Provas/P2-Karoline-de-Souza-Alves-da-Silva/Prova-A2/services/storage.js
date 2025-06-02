// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@books';

export const getBooks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao obter livros:', e);
    return [];
  }
};

export const saveBook = async (book) => {
  try {
    const books = await getBooks();
    books.push(book);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch (e) {
    console.error('Erro ao salvar livro:', e);
  }
};

export const updateBook = async (updatedBook) => {
  try {
    const books = await getBooks();
    const updatedList = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (e) {
    console.error('Erro ao atualizar livro:', e);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const books = await getBooks();
    const filtered = books.filter((book) => book.id !== bookId);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error('Erro ao excluir livro:', e);
  }
};
