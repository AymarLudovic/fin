import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { User } from '../types';
import { ProfileStyles } from './Profile.styles';
import Line from '../components/Line';
import Text from '../components/Text';
import Button from '../components/Button';

const Profile: React.FC = () => {
  const styles = StyleSheet.create(ProfileStyles);
  const { user }: { user: User } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user?.username}</Text>
      <Text style={styles.name}>{user?.name}</Text>
      <Line />
      <View style={styles.profileButtons}>
        <Button title="Edit Profile" />
        <Button title="Log Out" />
      </View>
    </View>
  );
};

export default Profile;