import React, { useContext, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './Search.styles';
import { AppContext } from '../../contexts/AppContext';
import { Post } from '../types';
import PostListItem from '../components/PostListItem';

const Search: React.FunctionComponent = () => {
  const { allPosts } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter((post: Post) => {
    return post.caption.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredPosts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Search;