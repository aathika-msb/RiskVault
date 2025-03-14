import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "../../theme/color";
import Sizes from "../../theme/size";
interface THeaderStyles {
  header: ViewStyle;
  title: TextStyle;
}
const headerStyles = StyleSheet.create<THeaderStyles>({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
    height: 60,
    paddingHorizontal: Sizes.smallPadding,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: Sizes.mediumText,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
});

export default headerStyles;