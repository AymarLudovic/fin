import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TextComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Génère moi un clone complet d'une application clone de Instagram pour iOS avec toutes ces fonctionnalités , pages, features, et autres tout cela dans un beau design bien fait</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextComponent;