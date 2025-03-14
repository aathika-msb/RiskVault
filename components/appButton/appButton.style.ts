import { StyleSheet } from 'react-native';
import Sizes from '../../theme/size';
import Colors from '../../theme/color';
import { font } from '../../theme/font';

const appButtonStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: Sizes.smallRadius,
    overflow: 'hidden',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.buttonPrimary, 
    paddingVertical: Sizes.smallPadding,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: Sizes.mediumText,
    fontFamily: font.fontFamily.regular,
    fontWeight: 'bold',
  },
});

export default appButtonStyles;
