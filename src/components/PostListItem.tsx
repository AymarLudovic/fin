import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Post} from '../../types/Post';

interface PostListItemProps {
  post: Post;
  onPress: () => void;
}

const PostListItem: React.FC<PostListItemProps> = ({post, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: post.image}} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.username}>{post.user.username}</Text>
        <Text style={styles.caption}>{post.caption}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 3,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
});

export default PostListItem;