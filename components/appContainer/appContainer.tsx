import React from "react";
import { View } from "react-native";
import appContainerStyles from "./appcontainer.style";
import Header from "../appHeader/appHeader";

interface TAppContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: object;
  title?: string;
  showHeader?: boolean;
  backPress?: () => void;
}

const AppContainer = ({
  children,
  style,
  title,
  showHeader = true,
  backPress,
}: TAppContainerProps): JSX.Element => {
  return (
    <View style={appContainerStyles.mainContainer}>
      {showHeader ? <Header title={title} backPress={backPress} /> : null}
      <View style={[appContainerStyles.container, style]}>{children}</View>
    </View>
  );
};

export default AppContainer;
