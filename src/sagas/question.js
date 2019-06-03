import * as QUESTION from '@src/actions/question';
import { put } from 'redux-saga/effects';

export function* onSearchRequest(action) {
  try {
    console.log('onSearchRequest:', action);
    yield put(QUESTION.onSearchSuccess({ payload: [] }));
  } catch (error) {
    console.log(error);
    yield put(QUESTION.onSearchFailure({ error }));
  }
}
