import { StyleSheet } from 'react-native';

const appButtonStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007bff', // Blue button
    paddingVertical: 12,
    paddingHorizontal: 20,
    
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default appButtonStyles;
