import { takeLatest } from 'redux-saga/effects';
import { QUESTION } from '@src/actions/constants';
import * as QUESTIONWATCHER from './question';

export default function* root() {
  yield takeLatest(QUESTION.SEARCH_REQUEST, QUESTIONWATCHER.onSearchRequest);
}
