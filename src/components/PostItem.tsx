import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface PostItemProps {
  username: string;
  post: string;
  imageUrl: string;
}

const PostItem: React.FC<PostItemProps> = ({ username, post, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={{ uri: imageUrl }} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Text style={styles.post}>{post}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginLeft: 10,
    fontSize: 16,
  },
  post: {
    marginTop: 10,
    fontSize: 14,
  },
});

export default PostItem;