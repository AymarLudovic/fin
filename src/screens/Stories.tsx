import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { StoriesContext } from '../contexts/StoriesContext';
import { Story } from '../types';
import { StoriesStyle } from './Stories.styles';

interface StoriesProps { }

const Stories: React.FC<StoriesProps> = () => {
  const { stories, getStories } = useContext(StoriesContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getStories();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getStories().then(() => setRefreshing(false));
  };

  return (
    <View style={StoriesStyle.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({ item }) => <Story story={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default Stories;