import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ProgressBar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const DEFAULT_COVER = "https://via.placeholder.com/100x150.png?text=Capa";

export default function BookListItem({ item, navigation, progresso }) {
  const { colors } = useTheme();

  const handlePress = () => {
    navigation.navigate("BookDetails", { book: item });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.card, { backgroundColor: colors.surface }]}
    >
      <Image
        source={{ uri: item.thumbnail || DEFAULT_COVER }}
        style={styles.coverImage}
        onError={() =>
          console.log(`Erro ao carregar imagem (ListItem): ${item.thumbnail}`)
        }
      />

      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: colors.onSurface }]}>
          {item.title}
        </Text>
        <Text style={[styles.author, { color: colors.onSurfaceVariant }]}>
          {item.author}
        </Text>

        {item.statusLeitura && (
          <Text style={[styles.status, { color: colors.onSurfaceVariant }]}>
            Status: {item.statusLeitura}
          </Text>
        )}

        {item.statusLeitura === "Lendo" &&
          progresso !== null &&
          progresso >= 0 && (
            <View style={styles.progressContainer}>
              <ProgressBar
                progress={progresso}
                color={colors.primary}
                style={styles.progressBar}
              />
              <Text
                style={[
                  styles.progressText,
                  { color: colors.onSurfaceVariant },
                ]}
              >
                {Math.round(progresso * 100)}%
              </Text>
            </View>
          )}
        {item.favorite && (
          <MaterialCommunityIcons
            name="heart"
            color="red"
            size={20}
            style={styles.heartIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  coverImage: {
    width: 70,
    height: 100,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: "#555",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    marginBottom: 4,
  },
  progressContainer: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
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
