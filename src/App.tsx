import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

// Import screens
import HomeScreen from "./screens/HomeScreen";

// Define navigation types for screens
type ScreenProps = {
  navigation: any;
};

// Create the stack navigator
const Stack = createStackNavigator<ScreenProps>();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Define the screens and their navigation options */}
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}