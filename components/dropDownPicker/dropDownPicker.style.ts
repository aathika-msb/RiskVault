import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "../../theme/color";
import Sizes from "../../theme/size";

interface TDropDownPickerStyles {
  dropDownMainContainer: ViewStyle;
  dropdown: ViewStyle;
  dropdownContainer: ViewStyle;
  dropdownText: TextStyle;
}

const styles = StyleSheet.create<TDropDownPickerStyles>({
  dropDownMainContainer: {
    padding: Sizes.smallPadding,
  },
  dropdown: {
    borderColor: Colors.inputBorder,
    borderWidth: 1.5,
    borderRadius: Sizes.smallRadius,
    backgroundColor: Colors.backgroundLight,
  },
  dropdownContainer: {
    borderColor: Colors.inputBorder,
    backgroundColor: Colors.backgroundLight,
  },
  dropdownText: {
    fontSize: Sizes.regularText,
    color: Colors.textPrimary,
  },
});

export default styles;
