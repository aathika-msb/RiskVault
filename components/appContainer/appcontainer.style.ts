import { StyleSheet } from 'react-native';
import Sizes from '../../theme/size';
import Colors from '../../theme/color';

const appContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Sizes.largePadding,
    backgroundColor: Colors.backgroundLight,
  },
});

export default appContainerStyles;
