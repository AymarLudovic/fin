import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { Post } from '../types';
import { HomeStyles } from './Home.styles';
import { PostsContext } from '../contexts/PostsContext';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { PostItem } from '../components/PostItem';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { posts, loading, error, fetchPosts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts().then(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {error && <Error />}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item} />}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create(HomeStyles);