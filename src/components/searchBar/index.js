import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './style';

export default function SearchBar() {
  return (
    <View style={styles.containerSearch}>
      <Feather name="search" size={24} color="#999" style={styles.searchIcon} />
      <TextInput
        style={styles.inputSearch}
        placeholder="Pesquisar instrumentos..."
        placeholderTextColor="#888"
      />
    </View>
  );
}
