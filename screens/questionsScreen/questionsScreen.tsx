// back handle
import React from "react";
import { View, Text } from "react-native";
import AppContainer from "../../components/appContainer/appContainer";
import AppButton from "../../components/appButton/appButton";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAssessmentData,
  resetFinalScore,
  setAssessmentData,
  setFinalScore,
} from "../../redux/actions/assessment";
import { questions, TQuestions } from "../../Constants/ConstantValue";
import { TNavigation } from "../../Constants/TypesConstants";
import questionsScreenStyle from "./questionsScreen.style";
import Dropdown from "../../components/dropDownPicker/dropDownPicker";
import { AppDispatch } from "../../redux/store";
import { RootStateTypes } from "../../redux/types/RootStateTypes";

interface TQuestionProps {
  navigation: TNavigation;
}

const QuestionsScreen = (props: TQuestionProps) => {
  const { navigation } = props;
  const { assessmentData } = useSelector(
    (state: RootStateTypes) => state.assessmentData
  );
  const dispatch: AppDispatch = useDispatch();

  const allAnswered = questions.every((q) => assessmentData[q.id]);

  const getNormalizedScore = (
    options: TQuestions["options"],
    selectedValue: number
  ): number => {
    const minScore = options[0].value;
    const maxScore = options[options.length - 1].value;
    const normalizedScore = (selectedValue - minScore) / (maxScore - minScore);
    return normalizedScore;
  };

  const getSelectedLabel = (
    options: TQuestions["options"],
    value: number
  ): string => {
    const selectedItem = options.find((item) => item.value === value);
    return selectedItem ? selectedItem.label : "None";
  };

  const handleDropDownChange = (
    options: TQuestions["options"],
    questionId: number,
    selectedValue: number
  ): void => {
    const label = getSelectedLabel(options, selectedValue);
    const normalizedScore = getNormalizedScore(options, selectedValue);
    dispatch(
      setAssessmentData({
        questionId,
        answer: label,
        value: selectedValue,
        normalizedScore,
      })
    );
  };

  const calCulateFinalScore = (): number => {
    return Object.values(assessmentData)
    .reduce((sum, entry) => sum + entry.normalizedScore, 0);
  }

  const onSubmit = (): void => {
    const totalScore = calCulateFinalScore();
    const scorePercentage = (totalScore / questions.length) * 100;

    dispatch(setFinalScore(scorePercentage));
    navigation.navigate("ScoreDisplay");
  };

  const handleBackPress = (): void => {
    dispatch(resetAssessmentData());
    dispatch(resetFinalScore());
    navigation.goBack();
  };

  const RenderQuestions = (
    questionDetails: TQuestions,
    index: number
  ): JSX.Element => {
    const { question, id, options } = questionDetails;
    return (
      <View style={questionsScreenStyle.questionContainer} key={index}>
        <Text style={questionsScreenStyle.questionText}>
          {`${index + 1}.`}
          {question}
        </Text>
        <Dropdown
          questionId={id}
          options={options}
          index={index}
          onChangeValue={handleDropDownChange}
        />
      </View>
    );
  };

  return (
    <AppContainer
      style={questionsScreenStyle.container}
      backPress={handleBackPress}
    >
      <Text style={questionsScreenStyle.title}>Answer the following questions to evaluate your risk level.</Text>
      {questions.map(
        (question: TQuestions, index: number): JSX.Element =>
          RenderQuestions(question, index)
      )}
      <AppButton
        forceDisabled={!allAnswered}
        style={questionsScreenStyle.buttonContainerStyle}
        title="Submit"
        onPress={() => onSubmit()}
        testId="submit-button"
      />
    </AppContainer>
  );
};

export default QuestionsScreen;
