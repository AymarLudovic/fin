import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { DeepLink, Linking } from 'expo';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Profile: { username: string };
};

export default function App() {
  const [initialNavigationState, setInitialNavigationState] = useState<any>();
  const [isReady, setIsReady] = useState(false);
  const deepLink = Linking.createURL('/profile/username');

  useEffect(() => {
    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  const handleDeepLink = (event: any) => {
    const data = event.url;
    if (data) {
      setInitialNavigationState({
        routes: [
          {
            name: 'Profile',
            params: {
              username: data.split('/')[2],
            },
          },
        ],
      });
    }
  };

  if (isReady) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  } else {
    return null;
  }
}