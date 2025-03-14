import { StyleSheet } from 'react-native';
import Colors from '../../theme/color';

const scoreDisplayScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textSecondary,
  },
});

export default scoreDisplayScreenStyles;
