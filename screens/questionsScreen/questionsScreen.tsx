import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppContainer from "../../components/appContainer/appContainer";
import AppButton from "../../components/appButton/appButton";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./questionsScreen.style";
import { useDispatch } from "react-redux";
import {
  setAssessmentData,
  setFinalScore,
} from "../../redux/actions/assessment";
import { questions } from "../../Constants/ConstantValue";
import { TNavigation } from "../../Constants/TypesConstants";
import questionsScreenStyle from "./questionsScreen.style";

interface TQuestionProps {
  navigation: TNavigation;
}

interface TQuestions {
  question: string;
  options: Array<{ label: string; value: number }>;
}

const QuestionsScreen = (props: TQuestionProps) => {
  const { navigation } = props;
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [minScore, setMinScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const dispatch = useDispatch();

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

  const Dropdown = (
    eachQuestion: TQuestions["options"],
    index: number
  ): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<number | null>(null);

    const getSelectedLabel = () => {
      const selectedItem = eachQuestion.find((item) => item.value === value);
      return selectedItem ? selectedItem.label : "None";
    };

    return (
      <View style={{ ...styles.dropDownMainContainer, zIndex: open ? 2 : 1 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={eachQuestion}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="Select an option"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          onChangeValue={(selectedItem) => {
            const value = {
              id: index + 1,
              label: getSelectedLabel(),
              value: selectedItem,
            };
            setTotalScore((prev) => prev + selectedItem);
            setSelectedValue((prev) => [...prev, value]);
          }}
          zIndex={3000 - index * 1000} // Ensure dropdowns are properly stacked
          zIndexInverse={1000 + index * 1000}
        />
      </View>
    );
  };

  const RenderQuestions = (
    questionDetails: TQuestions,
    index: number
  ): JSX.Element => {
    const { question, options } = questionDetails;
    return (
      <View style={questionsScreenStyle.questionContainer} key={index}>
        <Text style={questionsScreenStyle.questionText}>
          {`${index + 1}.`}
          {question}
        </Text>
        {Dropdown(options, index)}
      </View>
    );
  };
  const onSubmit = (): void => {
    const scorePercentage = calculateCivilScore();
    dispatch(setAssessmentData(selectedValue));
    dispatch(setFinalScore(scorePercentage));
    navigation.navigate("ScoreDisplay");
  };
  return (
    <AppContainer style={questionsScreenStyle.container}>
      <Text style={questionsScreenStyle.title}>Answer the below questions</Text>
      {questions.map(
        (question: TQuestions, index: number): JSX.Element =>
          RenderQuestions(question, index)
      )}
      <AppButton style={questionsScreenStyle.buttonContainerStyle} title="Submit" onPress={() => onSubmit()} />
    </AppContainer>
  );
};

export default QuestionsScreen;
