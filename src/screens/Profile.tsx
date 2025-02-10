import { ProfileTabParamList } from '../types';
import { Video } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { VideoContext } from '../contexts/VideoContext';
import { UserContext } from '../contexts/UserContext';
import ProfilePage from './ProfilePage';
import FollowingPage from './FollowingPage';
import FollowersPage from './FollowersPage';
import { useState } from 'react';

const Tab = createBottomTabNavigator<ProfileTabParamList>();

const Profile = () => {
  const { user } = UserContext();
  const { videos } = VideoContext();

  const [currentUserVideos, setCurrentUserVideos] = useState<Video[]>([]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Following') {
            iconName = 'group';
          } else if (route.name === 'Followers') {
            iconName = 'people';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Following" component={FollowingPage} />
      <Tab.Screen name="Followers" component={FollowersPage} />
    </Tab.Navigator>
  );
};

export default Profile;