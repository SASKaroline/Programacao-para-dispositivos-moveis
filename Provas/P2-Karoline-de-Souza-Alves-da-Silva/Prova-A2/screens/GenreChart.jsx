import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';

const chartColors = ['#e76f51', '#2a9d8f', '#f4a261', '#264653', '#e9c46a', '#8ecae6'];

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: () => '#333',
};

export default function GenreChart({ books = [] }) {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const genreMap = {};
    books.forEach(book => {
      const genre = book.genre || 'Outros';
      genreMap[genre] = (genreMap[genre] || 0) + 1;
    });

    const chartData = Object.entries(genreMap).map(([genre, count], i) => ({
      name: genre,
      population: count,
      color: chartColors[i % chartColors.length],
      legendFontColor: '#333',
      legendFontSize: 12,
    }));

    setGenreData(chartData);
  }, [books]);

  if (genreData.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Livros por Gênero</Text>
      <PieChart
        data={genreData}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="20"
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
});
