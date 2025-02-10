import React from 'react';
import {View, StyleSheet} from 'react-native';

interface LineProps {
  color?: string;
  width?: number;
  height?: number;
}

const Line: React.FC<LineProps> = ({color = '#000', width = 1, height = 30}) => {
  return <View style={[styles.line, {backgroundColor: color, width, height}]} />;
};

const styles = StyleSheet.create({
  line: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 5,
  },
});

export default Line;