import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

interface ProfilePageProps {
  username: string;
  profilePicture: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username, profilePicture }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfilePage;