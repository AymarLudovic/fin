import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Camera: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Camera;