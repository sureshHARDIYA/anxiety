import { takeLatest } from 'redux-saga/effects';
import { QUESTION, WORRY } from '@src/actions/constants';
import * as WORRYWATCHER from './worry';
import * as QUESTIONWATCHER from './question';

export default function* root() {
  yield takeLatest(QUESTION.SEARCH_REQUEST, QUESTIONWATCHER.onSearchRequest);
  yield takeLatest(WORRY.SEARCH_REQUEST, WORRYWATCHER.onSearchRequest);
  yield takeLatest(WORRY.CREATE_REQUEST, WORRYWATCHER.onCreateRequest);
  yield takeLatest(WORRY.UPDATE_REQUEST, WORRYWATCHER.onUpdateRequest);
}
