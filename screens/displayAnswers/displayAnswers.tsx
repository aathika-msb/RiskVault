import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { questions } from "../../Constants/ConstantValue";
import AppContainer from "../../components/appContainer/appContainer";
import displayAnswersStyle from "./displayAnswers.style";

interface TQuestions {
  id: number;
  question: string;
  options: Array<{ label: string; value: number }>;
}
const DisplayAnswerScreen = (): JSX.Element => {
  const { assessmentData } = useSelector((state) => state.assessmentData);
  
  const renderQuestion = (question: TQuestions, index: number): JSX.Element => {
    return (
      <View key={index} style={displayAnswersStyle.questionContainer}>
        <Text style={displayAnswersStyle.questionText}>{`${index + 1}. ${
          question.question
        }`}</Text>
        <Text style={displayAnswersStyle.answerText}>
          <Text
            style={{ ...displayAnswersStyle.answerText, fontWeight: "600" }}
          >
            Answer:{" "}
          </Text>
          {`${assessmentData[question.id].answer}`}
        </Text>
      </View>
    );
  };
  return (
    <AppContainer style={displayAnswersStyle.container}>
      <Text style={displayAnswersStyle.title}>Display Answer Screen</Text>
      {questions.map((question, index) => {
        return renderQuestion(question, index);
      })}
    </AppContainer>
  );
};

export default DisplayAnswerScreen;
