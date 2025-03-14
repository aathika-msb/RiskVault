import React from "react";
import { Text } from "react-native";
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
interface TScoreDisplayScreenProps {
  navigation: TNavigation;
}
const ScoreDisplayScreen = (props: TScoreDisplayScreenProps): JSX.Element => {
  const { navigation } = props;
  const { finalScore } = useSelector((state) => state.assessmentData);
  const dispatch = useDispatch();
  return (
    <AppContainer style={scoreDisplayScreenStyles.container}>
      <Text style={scoreDisplayScreenStyles.text}>
        Here is your assessment result
      </Text>
      <ScoreIndicator score={finalScore} />
      <Text
        style={scoreDisplayScreenStyles.linkText}
        onPress={() => navigation.navigate("DisplayAnswer")}
      >
        View your answers
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
