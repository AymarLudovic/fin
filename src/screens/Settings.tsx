import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SettingsStyles } from './Settings.styles';
import { MainContext } from '../contexts/MainContext';
import { User } from '../types';

const Settings: React.FC = () => {
  const { user }: { user: User } = React.useContext(MainContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create(SettingsStyles);

export default Settings;