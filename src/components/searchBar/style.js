import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F0F0F0',
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  inputSearch: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    marginRight: 10,
  }

});

export default styles;
