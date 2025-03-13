import { StyleSheet } from 'react-native';

const questionsScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark gray text
  },
  dropDownMainContainer: {
    padding: 16,
  },
  dropdown: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    borderColor: 'gray',
    backgroundColor: 'white',
  },
});

export default questionsScreenStyle;
