import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  style?: any;
};

const Button: React.FC<Props> = ({ title, onPress, style }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
        {isLoading && <ActivityIndicator size="small" color="#ffffff" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0095f6',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;