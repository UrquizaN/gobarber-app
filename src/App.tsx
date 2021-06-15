import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer theme={{
      dark: true,
      colors: {
        background: '#312e38',
        card: '#FFF',
        text: '#FFF',
        primary: '#312e38',
        border: '#FFF',
        notification: ''
      }
  }} >
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
     <AppProvider>
      <View style={{ flex: 1 }} >
        <Routes />
      </View>
     </AppProvider>
  </NavigationContainer>
);

export default App;
