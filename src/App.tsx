import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, extendTheme } from 'native-base';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Explore from './src/screens/Explore';
import Notifications from './src/screens/Notifications';
import ErrorBoundary from './src/components/ErrorBoundary';

const Stack = createStackNavigator();

const theme = extendTheme({
  colors: {
    primary: {
      500: '#8250DF',
    },
    error: {
      500: '#F87171',
    },
  },
});

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Async initialization here
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <ErrorBoundary>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Notifications" component={Notifications} />
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </NativeBaseProvider>
  );
};

export default App;