import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity style={{ zIndex: 2 }}>
        <Feather style={{ marginRight: 10 }} name="menu" size={36} color="white" />
      </TouchableOpacity>
      <Text style={{ ...styles.textHeader, zIndex: 2 }}> Bey & R </Text>
      <Image source={require('../../Img/logo.png')} style={[styles.logo, { zIndex: 2 }]} resizeMode="contain" />      
    </View>
  );
}
