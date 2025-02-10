import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Feed, Explore, Profile } from './src/screens';

const App: React.FunctionComponent = () => {
  const Stack = createStackNavigator<NavigationTypes>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;