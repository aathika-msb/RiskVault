import { setAssessmentData } from "../actions/assessment";
import { getActionType } from "../helperFunctions";

const initialState = {
assessmentData:'hai hello assessment data',
};

const assessmentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getActionType(setAssessmentData):
          return { ...state, assessmentData: action.payload };
      
    default:
      return state;
  }
};

export default assessmentDataReducer;
