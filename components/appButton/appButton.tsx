import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import appButtonStyles from "./appButton.style";
import Colors from "../../theme/color";

interface TAppButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  forceDisabled?: boolean;
}
const AppButton = ({
  title,
  onPress = () => {console.log(`Button ${title} pressed`)},
  style = {},
  textStyle = {},
  forceDisabled = false,
}: TAppButtonProps): JSX.Element => {
  let buttonTouchableStyle = { ...appButtonStyles.button };
  let buttonTextStyle = { ...appButtonStyles.buttonText, textStyle };
  if (forceDisabled) {
    buttonTextStyle = { ...buttonTextStyle, color: Colors.backgroundLight};
    buttonTouchableStyle = { ...buttonTouchableStyle, backgroundColor: Colors.buttonDisabled };
  }

  return (
    <View style={[appButtonStyles.buttonContainer, style]}>
      <TouchableOpacity style={buttonTouchableStyle} onPress={onPress} disabled={forceDisabled}>
        <Text style={buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
