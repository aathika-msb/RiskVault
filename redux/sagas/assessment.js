import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDataFromAPI } from '../helperFunctions';
import { FETCH_ASSESSMENT_DATA } from '../actionType';



function* fetchDataSaga() {
  try {
    //const data = yield call(fetchDataFromAPI(API_URL));
    yield put(setAssessmentData('hai hello assessment'));
  } catch (error) {
    yield put(setAssessmentData('hai hello assessment'));

  }
}

export function* assessmentData() {
  yield takeLatest(FETCH_ASSESSMENT_DATA, fetchDataSaga);
}
