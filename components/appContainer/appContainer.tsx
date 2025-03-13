import React from 'react';
import { View } from 'react-native';
import appContainerStyles from './appcontainer.style';

const AppContainer = ({ children, style }) => {
  return <View style={[appContainerStyles.container, style]}>{children}</View>;
};

export default AppContainer;
