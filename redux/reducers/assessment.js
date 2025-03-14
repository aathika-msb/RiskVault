import { resetAssessmentData, resetFinalScore, setAssessmentData, setFinalScore } from "../actions/assessment";
import { getActionType } from "../helperFunctions";

const initialState = {
  assessmentData: {},
  finalScore: 0,
};

const assessmentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getActionType(setAssessmentData):
      const { questionId, answer, value } = action.payload;
      // Store answer in a key-value format
      let assessmentData = state.assessmentData;
      assessmentData[questionId] = {
        answer,
        value,
      };
      return { ...state, ...assessmentData };
    case getActionType(setFinalScore):
      return { ...state, finalScore: action.payload };
      case getActionType(resetAssessmentData):
      return { ...state, ...initialState.assessmentData };
      case getActionType(resetFinalScore):
        return { ...state, ...initialState.finalScore };
    default:
      return state;
  }
};

export default assessmentDataReducer;
