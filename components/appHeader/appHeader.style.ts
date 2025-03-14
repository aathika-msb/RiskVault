import { StyleSheet } from "react-native";
import Colors from "../../theme/color";
import Sizes from "../../theme/size";

const headerStyles = StyleSheet.create({
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