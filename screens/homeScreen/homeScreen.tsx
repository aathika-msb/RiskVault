import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import AppButton from "../../components/appButton/appButton";
import AppContainer from "../../components/appContainer/appContainer";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <AppContainer>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Hello, this is MyScreen!
      </Text>
      <AppButton
        title="Go to Questions"
        onPress={() => navigation.navigate("Questions")}
      />
      <AppButton
        title="Go to ScoreDisplay"
        onPress={() => navigation.navigate("ScoreDisplay")}
      />
    </AppContainer>
  );
};

export default HomeScreen;
