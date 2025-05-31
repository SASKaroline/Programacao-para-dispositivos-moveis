import axios from 'axios';

export const searchBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`);
    return response.data.items || [];
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};
