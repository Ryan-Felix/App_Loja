import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "#141A29",
  },
  textHeader: {
    flex: 1,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  logo: {
    width: 50,
    height: 50,
    padding: 0,
    margin: 0,
  },
});

export default styles;
