import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, View } from 'react-native';
import {
  TextInput,
  Button,
  HelperText,
  List,
  Divider,
  Snackbar,
  Checkbox,
  RadioButton,
  Text
} from 'react-native-paper'; // Não vamos usar useTheme desta vez para forçar as cores
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';
import { saveBook, updateBook, getBooks } from '../services/storage';
import { searchBooksByTitle } from '../services/api';
import { useDebounce } from 'use-debounce';

const darkThemeColors = {
  background: '#121212', 
  surface: '#1E1E1E',   
  primary: '#BB86FC',   
  text: '#FFFFFF',
  placeholder: '#AAAAAA',
  error: '#CF6679',
  outline: '#444444',
  disabled: '#777777'
};

const schema = yup.object().shape({
  // ... (schema inalterado)
  title: yup.string().required('Título obrigatório'),
  author: yup.string().required('Autor obrigatório'),
  year: yup.string().matches(/^[0-9]{4}$/, 'Ano inválido').required('Ano obrigatório'),
  genre: yup.string().required('Gênero obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  thumbnail: yup.string().url('URL da capa inválida').nullable(),
  statusLeitura: yup.string().required('Informe o status da leitura'),
  progresso: yup.string().nullable(),
  favorite: yup.boolean(),
  pageCount: yup.string().nullable(),
});

const statusOptions = ['Lido', 'Lendo', 'Relendo', 'Abandonado', 'Querendo Ler'];

export default function BookForm({ navigation, route }) {
  const editingBookId = route?.params?.bookId;
  const directBookData = route?.params?.book;

  const [isLoading, setIsLoading] = useState(false);
  const [initialBookData, setInitialBookData] = useState({ favorite: false });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const isEdit = !!(editingBookId || directBookData);

  useEffect(() => {
    if (directBookData) {
      reset(directBookData);
      setInitialBookData(directBookData);
    } else if (editingBookId) {
      setIsLoading(true);
      const loadBookData = async () => {
        const allBooks = await getBooks();
        const bookToEdit = allBooks.find(b => b.id.toString() === editingBookId.toString());
        if (bookToEdit) {
          reset(bookToEdit);
          setInitialBookData(bookToEdit);
        } else {
          console.warn(`Livro com ID ${editingBookId} não encontrado para edição.`);
          reset({ favorite: false, title: '', author: '', year: '', genre: '', description: '', thumbnail: null, statusLeitura: statusOptions[0], progresso: null, pageCount: null });
        }
        setIsLoading(false);
      };
      loadBookData();
    } else {
      reset({ favorite: false, title: '', author: '', year: '', genre: '', description: '', thumbnail: null, statusLeitura: statusOptions[0], progresso: null, pageCount: null });
    }
  }, [editingBookId, directBookData, reset]);

  const [suggestions, setSuggestions] = useState([]);
  const [titleSearch, setTitleSearch] = useState('');
  const [debouncedTitle] = useDebounce(titleSearch, 500);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const statusLeitura = watch('statusLeitura');

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedTitle.length > 2) {
        const results = await searchBooksByTitle(debouncedTitle);
        setSuggestions(results.slice(0, 5));
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [debouncedTitle]);

  const fillFormFromSuggestion = (item) => {
    const info = item.volumeInfo;
    setValue('title', info.title || '');
    setValue('author', info.authors?.[0] || '');
    setValue('year', info.publishedDate?.slice(0, 4) || '');
    setValue('genre', info.categories?.[0] || '');
    setValue('description', info.description || '');
    setValue('thumbnail', info.imageLinks?.thumbnail || '');
    setValue('pageCount', info.pageCount?.toString() || '');
    setSuggestions([]);
  };

  const onSubmit = async (formData) => {
    if (isEdit) {
      const bookToUpdate = { ...initialBookData, ...formData, id: initialBookData.id };
      await updateBook(bookToUpdate);
    } else {
      await saveBook({ ...formData, id: Date.now().toString() });
    }
    setSnackbarVisible(true);
    setTimeout(() => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }, 1000);
  };

  if (isLoading && editingBookId) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: darkThemeColors.background }]}>
        <ActivityIndicator size="large" color={darkThemeColors.primary} />
        <Text style={{ color: darkThemeColors.text, marginTop: 10 }}>Carregando dados do livro...</Text>
      </View>
    );
  }

  const textInputTheme = {
    colors: {
      text: darkThemeColors.text,
      placeholder: darkThemeColors.placeholder,
      primary: darkThemeColors.primary,
      background: darkThemeColors.surface,
      outline: darkThemeColors.outline,
      onSurfaceVariant: darkThemeColors.placeholder,
      surfaceVariant: darkThemeColors.surface,
      error: darkThemeColors.error,
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Título"
              value={value}
              onChangeText={(text) => { onChange(text); setTitleSearch(text); }}
              style={styles.input}
              theme={textInputTheme} 
              mode="outlined" 
              textColor={darkThemeColors.text}
              placeholderTextColor={darkThemeColors.placeholder}
              activeOutlineColor={darkThemeColors.primary}
              outlineColor={darkThemeColors.outline}
            />
            <HelperText type="error" visible={!!errors.title} theme={{colors: {error: darkThemeColors.error}}}>
              {errors.title?.message}
            </HelperText>
            {suggestions.map((item) => (
              <List.Item
                key={item.id}
                title={item.volumeInfo.title}
                description={item.volumeInfo.authors?.join(', ')}
                onPress={() => fillFormFromSuggestion(item)}
                titleStyle={{ color: darkThemeColors.text }}
                descriptionStyle={{ color: darkThemeColors.placeholder }}
                style={styles.suggestionItem}
              />
            ))}
            {suggestions.length > 0 && <Divider style={{ backgroundColor: darkThemeColors.outline }} />}
          </>
        )}
      />

      {/* Aplicar o mesmo padrão de tema/props de cor para os outros TextInputs */}
      <Controller control={control} name="author" render={({ field: { onChange, value } }) => (<><TextInput label="Autor" value={value} onChangeText={onChange} style={styles.input} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} /><HelperText type="error" visible={!!errors.author} theme={{colors: {error: darkThemeColors.error}}}>{errors.author?.message}</HelperText></>)} />
      <Controller control={control} name="year" render={({ field: { onChange, value } }) => (<><TextInput label="Ano" value={value} onChangeText={onChange} keyboardType="numeric" style={styles.input} render={(props) => <TextInputMask {...props} type="custom" options={{ mask: '9999' }} />} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} /><HelperText type="error" visible={!!errors.year} theme={{colors: {error: darkThemeColors.error}}}>{errors.year?.message}</HelperText></>)} />
      <Controller control={control} name="genre" render={({ field: { onChange, value } }) => (<><TextInput label="Gênero" value={value} onChangeText={onChange} style={styles.input} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} /><HelperText type="error" visible={!!errors.genre} theme={{colors: {error: darkThemeColors.error}}}>{errors.genre?.message}</HelperText></>)} />
      <Controller control={control} name="description" render={({ field: { onChange, value } }) => (<><TextInput label="Descrição" multiline numberOfLines={3} value={value} onChangeText={onChange} style={styles.input} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} /><HelperText type="error" visible={!!errors.description} theme={{colors: {error: darkThemeColors.error}}}>{errors.description?.message}</HelperText></>)} />
      <Controller control={control} name="thumbnail" render={({ field: { onChange, value } }) => (<TextInput label="URL da Capa (opcional)" value={value || ''} onChangeText={onChange} style={styles.input} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} />)} />

      <Text style={[styles.radioLabel, { color: darkThemeColors.text }]}>Status de Leitura</Text>
      <Controller control={control} name="statusLeitura" render={({ field: { onChange, value } }) => (<RadioButton.Group onValueChange={onChange} value={value}>{statusOptions.map((option) => (<RadioButton.Item key={option} labelStyle={{color: darkThemeColors.text}} color={darkThemeColors.primary} uncheckedColor={darkThemeColors.placeholder} label={option} value={option} />))}</RadioButton.Group>)} />
      <HelperText type="error" visible={!!errors.statusLeitura} theme={{colors: {error: darkThemeColors.error}}}>{errors.statusLeitura?.message}</HelperText>

      {statusLeitura === 'Lendo' && (<Controller control={control} name="progresso" render={({ field: { onChange, value } }) => (<TextInput label="Progresso da Leitura (ex: 120/300 ou 40%)" value={value || ''} onChangeText={onChange} style={styles.input} theme={textInputTheme} mode="outlined" textColor={darkThemeColors.text} placeholderTextColor={darkThemeColors.placeholder} activeOutlineColor={darkThemeColors.primary} outlineColor={darkThemeColors.outline} />)} />)}
      <Controller control={control} name="favorite" render={({ field: { onChange, value } }) => (<Checkbox.Item labelStyle={{fontWeight: 'bold', color: darkThemeColors.text}} color={darkThemeColors.primary} uncheckedColor={darkThemeColors.placeholder} label="Marcar como favorito" status={value ? 'checked' : 'unchecked'} onPress={() => onChange(!value)} />)} />

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button} buttonColor={darkThemeColors.primary} textColor={darkThemeColors.surface /* ou uma cor clara específica se o primário for muito claro */}>
        {isEdit ? 'Atualizar Livro' : 'Salvar Livro'}
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={1500}
        style={{ backgroundColor: darkThemeColors.surface }} // Fundo do snackbar
        theme={{ colors: { inverseSurface: darkThemeColors.text, inverseOnSurface: darkThemeColors.surface } }} // Para texto e botão de ação do snackbar
      >
        <Text style={{color: darkThemeColors.text}}>Livro {isEdit ? 'atualizado' : 'salvo'} com sucesso!</Text>
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Adicionado padding horizontal
    paddingVertical: 8,   // Adicionado padding vertical
    backgroundColor: darkThemeColors.background, // Fundo da tela principal
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor é definido inline
  },
  input: {
    marginBottom: 12, // Espaçamento entre inputs
    // O fundo do TextInput será controlado pelo 'theme' prop (textInputTheme.colors.background)
    // ou pelo estilo padrão do Paper TextInput no modo 'outlined' ou 'flat'
    // Se usar 'outlined', o backgroundColor no style pode ser para a área interna se o TextInput não a cobrir
  },
  button: {
    marginTop: 20,
    marginBottom: 10, // Adiciona margem inferior ao botão
    paddingVertical: 8,
    borderRadius: 8, // Bordas mais arredondadas para o botão
  },
  radioLabel: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 17, // Aumentei um pouco
    fontWeight: 'bold', // Opcional
    // cor definida inline
  },
  suggestionItem: {
    backgroundColor: darkThemeColors.surface, // Fundo para os itens de sugestão
    borderBottomWidth: 1,
    borderBottomColor: darkThemeColors.outline,
    marginBottom: 2,
  }
});