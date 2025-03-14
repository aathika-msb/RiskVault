// back handle
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppContainer from "../../components/appContainer/appContainer";
import AppButton from "../../components/appButton/appButton";
import styles from "./questionsScreen.style";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAssessmentData,
  resetFinalScore,
  setAssessmentData,
  setFinalScore,
} from "../../redux/actions/assessment";
import { questions } from "../../Constants/ConstantValue";
import { TNavigation } from "../../Constants/TypesConstants";
import questionsScreenStyle from "./questionsScreen.style";
import Dropdown from "../../components/dropDownPicker/dropDownPicker";
import { AppDispatch } from "../../redux/store";
import { RootStateTypes } from "../../redux/types/RootStateTypes";

interface TQuestionProps {
  navigation: TNavigation;
}

interface TQuestions {
  id: number;
  question: string;
  options: Array<{ label: string; value: number }>;
}

const QuestionsScreen = (props: TQuestionProps) => {
  const { navigation } = props;
  const [totalScore, setTotalScore] = useState<number>(0);
  const [minScore, setMinScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const { assessmentData } = useSelector(
    (state: RootStateTypes) => state.assessmentData
  );
  const dispatch: AppDispatch = useDispatch();

  const allAnswered = questions.every((q) => assessmentData[q.id]);

  const calMinMaxScore = (): void => {
    let min: number = 0;
    let max: number = 0;
    questions.forEach((question) => {
      min += question.options[0].value;
      max += question.options[question.options.length - 1].value;
    });
    setMinScore(min);
    setMaxScore(max);
  };

  useEffect(() => {
    calMinMaxScore();
  }, []);

  const calculateCivilScore = (): number => {
    // Calculate percentage
    const civilScorePercentage =
      ((totalScore - minScore) / (maxScore - minScore)) * 100;

    return Math.round(civilScorePercentage);
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
    dispatch(
      setAssessmentData({
        questionId,
        answer: label,
        value: selectedValue,
      })
    );
    setTotalScore((prev) => prev + selectedValue);
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
  const onSubmit = (): void => {
    const scorePercentage = calculateCivilScore();
    //dispatch(setAssessmentData(selectedValue));
    dispatch(setFinalScore(scorePercentage));
    navigation.navigate("ScoreDisplay");
  };

  const handleBackPress = (): void => {
    dispatch(resetAssessmentData());
    dispatch(resetFinalScore());
    navigation.goBack();
  };
  return (
    <AppContainer
      style={questionsScreenStyle.container}
      backPress={handleBackPress}
    >
      <Text style={questionsScreenStyle.title}>Answer the below questions</Text>
      {questions.map(
        (question: TQuestions, index: number): JSX.Element =>
          RenderQuestions(question, index)
      )}
      <AppButton
        forceDisabled={!allAnswered}
        style={questionsScreenStyle.buttonContainerStyle}
        title="Submit"
        onPress={() => onSubmit()}
      />
    </AppContainer>
  );
};

export default QuestionsScreen;
