import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Camera from './screens/Camera';
import CreatePost from './screens/CreatePost';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      header: null,
    },
  },
  CreatePost: {
    screen: CreatePost,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);