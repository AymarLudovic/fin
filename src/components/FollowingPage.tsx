import * as React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

interface FollowingPageProps {
  navigation: any;
}

const FollowingPage: React.FC<FollowingPageProps> = ({ navigation }) => {
  const [followings, setFollowings] = React.useState([]);

  React.useEffect(() => {
    // Fetch following data from API
    fetch('https://api.example.com/followings')
      .then(res => res.json())
      .then(data => setFollowings(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.followingItem}>
      <Text>{item.username}</Text>
      <Button title="View Profile" onPress={() => navigation.navigate('Profile', { username: item.username })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={followings}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FollowingPage;