import React from 'react';
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import StackRoutes from './src/Routes/StackRoutes';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        {/* Stack */}
        <StackRoutes />

      </NavigationContainer>
    </PaperProvider>
  
  );
}