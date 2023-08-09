import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textDestaque: {
    fontSize: 30,
    color: "#141A29",
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  container: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingRight: 16,
    width: 140,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#141A29",
    marginTop: 8,
    fontFamily: 'Arial', 
  },
  textNota: {
    fontSize: 14,
    color: "#666",
    fontFamily: 'Helvetica',
    fontStyle: 'italic', 
  },
  images: {
    width: '100%',
    height: 170,
    borderRadius: 8,
  },
  textPreco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000", // verde escuro para o preço
  },
});

export default styles;
