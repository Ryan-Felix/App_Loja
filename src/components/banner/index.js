import React,{Fragment} from "react"
import {Image,Text} from 'react-native'
import styles from './styles';


export default function BannerProdutos(){
    return(
        <Image style = {styles.imageBanner} source  = {require(`../../Img/1.jpeg`)}/>
    );
}



/*  

Mudança de imagem (aleatória) a cada reset

const Imagem = Math.floor(Math.random() * 4 + 1);

export default function BannerProdutos(){
    return(
        <Image style = {styles.imageBanner} source  = {require(`../../Img/${Imagem}.jpg`)}/>
    );
}




*/