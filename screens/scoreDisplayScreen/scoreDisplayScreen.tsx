import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import scoreDisplayScreenStyles from "./scoreDisplayScreen.style";

const ScoreDisplayScreen = () => {
  const { finalScore } = useSelector((state) => state.assessmentData);
  return (
    <View style={scoreDisplayScreenStyles.container}>
      <Text style={scoreDisplayScreenStyles.text}>
        Your score is {finalScore}
      </Text>
    </View>
  );
};

export default ScoreDisplayScreen;
