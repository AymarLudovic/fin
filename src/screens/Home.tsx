import { FC, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomeStyles } from './Home.styles';
import { AuthContext } from '../contexts/AuthContext';
import { PostContext } from '../contexts/PostContext';
import { PostType } from '../types';
import PostList from '../components/PostList';

const Home: FC = () => {
  const { user } = AuthContext();
  const { posts, getPosts } = PostContext();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PostList posts={posts as PostType[]} />
    </View>
  );
};

const styles = StyleSheet.create(HomeStyles);

export default Home;