// BookGridItem.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BookGridItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('BookDetails', { book: item })}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: item.thumbnail || 'https://via.placeholder.com/100x150?text=Sem+Capa' }}
          style={styles.image}
        />
        {item.favorite && (
          <MaterialCommunityIcons
            name="heart"
            color="red"
            size={20}
            style={styles.heartIcon}
          />
        )}
      </View>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    margin: 8,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  heartIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 1,
  },
  title: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 100,
  },
});