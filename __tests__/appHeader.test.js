import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/appHeader/appHeader";

describe("Header Component", () => {
  const renderWithNavigation = (component) => {
    return render(<NavigationContainer>{component}</NavigationContainer>);
  };

  it("renders the header title correctly", () => {
    const { getByText } = renderWithNavigation(<Header title="Test Title" />);
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("calls backPress function when back button is pressed", () => {
    const mockBackPress = jest.fn();
    const { getByTestId } = renderWithNavigation(
      <Header title="Test Title" backPress={mockBackPress} />
    );
    
    fireEvent.press(getByTestId("back-button"));
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });

});