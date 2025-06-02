import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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
} from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextInputMask } from 'react-native-masked-text';
import { saveBook, updateBook } from '../services/storage';
import { searchBooksByTitle } from '../services/api';
import { useDebounce } from 'use-debounce';

const schema = yup.object().shape({
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
  const isEdit = !!route?.params?.book;
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: route?.params?.book || { favorite: false },
  });

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

  const onSubmit = async (data) => {
    if (isEdit) {
      await updateBook({ ...route.params.book, ...data });
    } else {
      await saveBook({ ...data, id: Date.now().toString() });
    }
    setSnackbarVisible(true);
    navigation.goBack();
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
              onChangeText={(text) => {
                onChange(text);
                setTitleSearch(text);
              }}
              style={styles.input}
            />
            <HelperText type="error" visible={!!errors.title}>{errors.title?.message}</HelperText>
            {suggestions.map((item) => (
              <List.Item
                key={item.id}
                title={item.volumeInfo.title}
                description={item.volumeInfo.authors?.join(', ')}
                onPress={() => fillFormFromSuggestion(item)}
              />
            ))}
            {suggestions.length > 0 && <Divider />}
          </>
        )}
      />

      <Controller
        control={control}
        name="author"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput label="Autor" value={value} onChangeText={onChange} style={styles.input} />
            <HelperText type="error" visible={!!errors.author}>{errors.author?.message}</HelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="year"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Ano"
              value={value}
              onChangeText={onChange}
              keyboardType="numeric"
              style={styles.input}
              render={(props) => <TextInputMask {...props} type="custom" options={{ mask: '9999' }} />}
            />
            <HelperText type="error" visible={!!errors.year}>{errors.year?.message}</HelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="genre"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput label="Gênero" value={value} onChangeText={onChange} style={styles.input} />
            <HelperText type="error" visible={!!errors.genre}>{errors.genre?.message}</HelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput label="Descrição" multiline value={value} onChangeText={onChange} style={styles.input} />
            <HelperText type="error" visible={!!errors.description}>{errors.description?.message}</HelperText>
          </>
        )}
      />

      <Controller
        control={control}
        name="thumbnail"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="URL da Capa (opcional)"
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />

      <Text style={styles.radioLabel}>Status de Leitura</Text>
      <Controller
        control={control}
        name="statusLeitura"
        render={({ field: { onChange, value } }) => (
          <RadioButton.Group onValueChange={onChange} value={value}>
            {statusOptions.map((option) => (
              <RadioButton.Item key={option} label={option} value={option} />
            ))}
          </RadioButton.Group>
        )}
      />
      <HelperText type="error" visible={!!errors.statusLeitura}>{errors.statusLeitura?.message}</HelperText>

      {statusLeitura === 'Lendo' && (
        <Controller
          control={control}
          name="progresso"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label="Progresso da Leitura (ex: 120/300 ou 40%)"
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />
      )}

      <Controller
        control={control}
        name="favorite"
        render={({ field: { onChange, value } }) => (
          <Checkbox.Item
            label="Marcar como favorito"
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(!value)}
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        {isEdit ? 'Atualizar' : 'Salvar Livro'}
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
      >
        Livro {isEdit ? 'atualizado' : 'salvo'} com sucesso!
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  input: { marginBottom: 8 },
  button: { marginTop: 16 },
  radioLabel: { marginTop: 16, fontSize: 16, fontWeight: 'bold' },
});
