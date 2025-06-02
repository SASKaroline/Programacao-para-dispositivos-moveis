import React from 'react';
import DrawerNavigator from './Navigation/DrawerNavigator';
import { MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <DrawerNavigator />
    </PaperProvider>
  );
}

