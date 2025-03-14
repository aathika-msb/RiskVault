import React from "react";
import { Text, Image } from "react-native";
import AppButton from "../../components/appButton/appButton";
import AppContainer from "../../components/appContainer/appContainer";
import { TNavigation } from "../../Constants/TypesConstants";
import homeScreenStyles from "./homeScreen.style";
interface THomeScreenProps {
  navigation: TNavigation;
}

const HomeScreen = (props: THomeScreenProps): JSX.Element => {
  const { navigation } = props;
  return (
    <AppContainer style={homeScreenStyles.container} showHeader={false}>
      <Image
        style={homeScreenStyles.mainImage}
        source={require("../../assets/risk_assessment.png")}
      />
      <Text style={homeScreenStyles.title}>Welcome to Risk Vault!</Text>
      <Text style={homeScreenStyles.subTitle}>
      Start the questionnaire to assess your risk score.
      </Text>
      <AppButton
        title="Begin Questionaire"
        onPress={() => navigation.navigate("Questions")}
      />
    </AppContainer>
  );
};

export default HomeScreen;
