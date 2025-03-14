import { StyleSheet, View, ViewStyle } from 'react-native';
import Sizes from '../../theme/size';
import Colors from '../../theme/color';

interface TAppContainerStyles {
  mainContainer: ViewStyle;
  container: ViewStyle;
}

const appContainerStyles = StyleSheet.create<TAppContainerStyles>({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  container: {
    flex: 1,
    padding: Sizes.largePadding,
    backgroundColor: Colors.backgroundLight,
  },
});

export default appContainerStyles;
