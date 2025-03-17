import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";

export const renderComponents = (component) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};
