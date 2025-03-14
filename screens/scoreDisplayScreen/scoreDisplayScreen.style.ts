import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../theme/color';
import Sizes from '../../theme/size';
import { moderateScale } from 'react-native-size-matters';

interface TScoreDisplayScreenStyles {
  container: ViewStyle;
  mainImage: ImageStyle;
  text: TextStyle;
  linkText: TextStyle;
}

const scoreDisplayScreenStyles = StyleSheet.create<TScoreDisplayScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
  },
  mainImage: {
    height: moderateScale(240),
    width: moderateScale(240),
    marginBottom: Sizes.mediumPadding,
    borderRadius: Sizes.mediumRadius
  },
  text: {
    fontSize: Sizes.largeText,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  linkText: {
    fontSize: Sizes.regularText,
    fontWeight: '600',
    color: Colors.textHighlight,
    textDecorationLine: 'underline',
    marginTop: Sizes.regularMargin,
    marginBottom: Sizes.largeMargin,
  }
});

export default scoreDisplayScreenStyles;
