import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import appButtonStyles from "./appButton.style";

interface TAppButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}
const AppButton = ({
  title,
  onPress = () => {},
  style = {},
  textStyle = {},
}: TAppButtonProps): JSX.Element => {
  return (
    <View style={[appButtonStyles.buttonContainer, style]}>
      <TouchableOpacity style={appButtonStyles.button} onPress={onPress}>
        <Text style={[appButtonStyles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;
