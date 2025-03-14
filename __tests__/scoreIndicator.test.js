import React from "react";
import { render } from "@testing-library/react-native";
import ScoreIndicator from "../components/scoreIndicator/scoreIndicator";
import { Animated } from "react-native";

describe("ScoreIndicator Component", () => {
  it("renders correctly with given score", () => {
    const { getByText } = render(<ScoreIndicator score={50} />);
    expect(getByText("Score: 50")).toBeTruthy();
  });

  it("displays 'Low' when score is below 40", () => {
    const { getByText } = render(<ScoreIndicator score={30} />);
    expect(getByText("Low")).toBeTruthy();
  });

  it("displays 'Medium' when score is between 40 and 70", () => {
    const { getByText } = render(<ScoreIndicator score={50} />);
    expect(getByText("Medium")).toBeTruthy();
  });

  it("displays 'High' when score is above 70", () => {
    const { getByText } = render(<ScoreIndicator score={80} />);
    expect(getByText("High")).toBeTruthy();
  });

});
