import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function CardProdutos({ titulo, imagem, nota, preco }) {
 
  <Text style={styles.textDestaque}>Oferta do dia!</Text>
 
  return (
    <TouchableOpacity style={styles.container}>
      
      <Image style={styles.images} source={require(`../../Img/${imagem}`)} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textPreco}>{preco}</Text>
      <Text style={styles.textNota}>Avaliação: {nota}</Text>
    </TouchableOpacity>
  );
}
