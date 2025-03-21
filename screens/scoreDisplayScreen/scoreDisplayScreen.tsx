import React from "react";
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import scoreDisplayScreenStyles from "./scoreDisplayScreen.style";
import ScoreIndicator from "../../components/scoreIndicator/scoreIndicator";
import { TNavigation } from "../../Constants/TypesConstants";
import AppButton from "../../components/appButton/appButton";
import AppContainer from "../../components/appContainer/appContainer";
import {
  resetAssessmentData,
  resetFinalScore,
} from "../../redux/actions/assessment";
import { AppDispatch } from "../../redux/store";
import { RootStateTypes } from "../../redux/types/RootStateTypes";
interface TScoreDisplayScreenProps {
  navigation: TNavigation;
}
const ScoreDisplayScreen = (props: TScoreDisplayScreenProps): JSX.Element => {
  const { navigation } = props;
  const { finalScore } = useSelector(
    (state: RootStateTypes) => state.assessmentData
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <AppContainer style={scoreDisplayScreenStyles.container}>
      <Image
        style={scoreDisplayScreenStyles.mainImage}
        source={require("../../assets/risk_analysis_icon.png")}
      />
      <Text style={scoreDisplayScreenStyles.text}>
      Your Risk Assessment Result
      </Text>
      <ScoreIndicator score={finalScore} />
      <Text
        style={scoreDisplayScreenStyles.linkText}
        onPress={() => navigation.navigate("DisplayAnswer")}
      >
        View Your Responses
      </Text>
      <AppButton
        title="Retake Assessment"
        onPress={() => {
          dispatch(resetAssessmentData());
          dispatch(resetFinalScore());
          navigation.popToTop();
          navigation.navigate("Questions");
        }}
      />
    </AppContainer>
  );
};

export default ScoreDisplayScreen;
