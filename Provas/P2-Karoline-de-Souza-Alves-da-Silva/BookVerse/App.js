import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import DrawerNavigator from "./Navigation/DrawerNavigator";

const customNavigationTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#121212",
    card: "#1E1E1E",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={customNavigationTheme}>
        <PaperProvider theme={MD3DarkTheme}>
          <DrawerNavigator />
        </PaperProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
