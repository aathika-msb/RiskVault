import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import headerStyles from "./appHeader.style";
import Colors from "../../theme/color";
import Sizes from "../../theme/size";

interface THeaderProps {
  title: string;
  backPress?: () => void;
}
const Header = ({ title, backPress }: THeaderProps): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.header}>
      <TouchableOpacity
        onPress={() => (backPress ? backPress() : navigation.goBack())}
        testID="back-button"
      >
        <Ionicons
          name="arrow-back"
          size={Sizes.regularIcon}
          color={Colors.textPrimary}
        />
      </TouchableOpacity>

      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;
