import { FETCH_ASSESSMENT_DATA, SET_ASSESSMENT_DATA } from "../actionType";
import { action } from "../helperFunctions";

export const fetchAssessmentData = () => (action(FETCH_ASSESSMENT_DATA));
  
export const setAssessmentData = (data) => (action(SET_ASSESSMENT_DATA, data));
  
 