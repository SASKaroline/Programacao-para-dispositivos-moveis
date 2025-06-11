import React, { useEffect, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';

const purpleThemeChartColors = ['#BB86FC', '#9C51E0', '#7F39FB', '#D6AEFF', '#6200EE', '#8A2BE2'];

export default function GenreChart({ books = [] }) {
  const { colors } = useTheme(); 
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
      color: purpleThemeChartColors[i % purpleThemeChartColors.length], 
      legendFontColor: colors.onSurface, 
      legendFontSize: 12,
    }));

    setGenreData(chartData);
  }, [books]);
  
  const chartConfig = {
    backgroundGradientFrom: colors.surface,
    backgroundGradientTo: colors.surface,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 0.7})`,
  };

  if (genreData.length === 0) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderRadius: 12 }]}>
      <Text variant="titleLarge" style={{ color: colors.onSurface, marginBottom: 10 }}>Livros por Gênero</Text>
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
    alignItems: 'center',
    marginTop: 20,
  },
});