import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Card, Appbar, useTheme } from 'react-native-paper';

export default function Perfil() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      <Appbar.Header style={{ backgroundColor: colors.surface }} elevated>
        <Appbar.Content title="Meu Perfil" titleStyle={{fontWeight: 'bold'}} />
      </Appbar.Header>

      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <Avatar.Image 
            size={100} 
            source={require('../assets/perfil.jpg')}
          />
          <Text variant="headlineSmall" style={[styles.name, { color: colors.onSurface }]}>
            Taylor Swift
          </Text>
        </View>

        <Card style={[styles.infoCard, { backgroundColor: colors.surface }]}>
          <Card.Content>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.onSurfaceVariant }]}>User:</Text>
              <Text style={[styles.infoValue, { color: colors.onSurface }]}>@Taytay19</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.onSurfaceVariant }]}>Email:</Text>
              <Text style={[styles.infoValue, { color: colors.onSurface }]}>Taylorthebest@gmail.com</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  name: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  infoCard: {
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});