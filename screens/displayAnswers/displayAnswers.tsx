import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import store from "../../redux/store";

const DisplayAnswerScreen = () => {
  const { finalScore } = useSelector((state) => state.assessmentData);
  const { assessmentData } = useSelector((state) => state.assessmentData);
  console.log('store', store.getState());
  console.log("🚀 -------------------------------------------------963 ~ ScoreDisplayScreen ~ assessmentData:", assessmentData)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Your score is {finalScore}
      </Text>
    </View>
  );
};

export default DisplayAnswerScreen;
