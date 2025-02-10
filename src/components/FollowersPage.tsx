import { View, Text, FlatList } from 'react-native';
import { Follower } from '../types';

type Props = {
  followers: Follower[];
};

const FollowersPage: React.FC<Props> = ({ followers }) => {
  const renderItem = ({ item }: { item: Follower }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: item.profile_picture_url }} />
      <Text style={{ marginLeft: 10 }}>{item.username}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <FlatList data={followers} renderItem={renderItem} />
    </View>
  );
};

export default FollowersPage;