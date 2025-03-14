import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Sizes from '../../theme/size';
import { moderateScale } from 'react-native-size-matters';
import { font } from '../../theme/font';
import Colors from '../../theme/color';

interface IHomeScreenStyles {
  container: ViewStyle;
  mainImage: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

const homeScreenStyles = StyleSheet.create<IHomeScreenStyles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundDark,
  },
  mainImage: {
    height: moderateScale(240),
    width: moderateScale(240),
    marginBottom: Sizes.mediumPadding,
    borderRadius: Sizes.mediumRadius
  },
  title: {
    fontSize: moderateScale(Sizes.largeText),
    color: Colors.textPrimary,
    textAlign: 'center',
    paddingBottom: Sizes.mediumPadding,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: moderateScale(Sizes.mediumText),
    color: Colors.textSecondary,
    paddingBottom: Sizes.mediumPadding,
    textAlign: 'center',
    fontWeight: 'semibold',
  }

});

export default homeScreenStyles;
