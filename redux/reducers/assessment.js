import { setAssessmentData, setFinalScore } from "../actions/assessment";
import { getActionType } from "../helperFunctions";

const initialState = {
  assessmentData: [
  ],
  finalScore: 0,
};

const assessmentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getActionType(setAssessmentData):
      return { ...state, assessmentData: action.payload };
    case getActionType(setFinalScore):
      return { ...state, finalScore: action.payload };
    default:
      return state;
  }
};

export default assessmentDataReducer;
