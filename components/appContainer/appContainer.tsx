import React from "react";
import { View } from "react-native";
import appContainerStyles from "./appcontainer.style";

interface TAppContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: object;
}

const AppContainer = ({ children, style }: TAppContainerProps): JSX.Element => {
  return <View style={[appContainerStyles.container, style]}>{children}</View>;
};

export default AppContainer;
