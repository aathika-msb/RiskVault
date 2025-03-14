import { StyleSheet } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';

const scoreDisplayScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  text: {
    fontSize: Sizes.largeText,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  linkText: {
    fontSize:  Sizes.regularText,
    fontWeight: '600',
    color: Colors.textHighlight,
    textDecorationLine: 'underline',
    marginTop: Sizes.regularMargin,
    marginBottom: Sizes.largeMargin,
  }
});

export default scoreDisplayScreenStyles;
