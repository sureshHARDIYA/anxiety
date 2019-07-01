import { takeLatest } from 'redux-saga/effects';
import { QUESTION, WORRY, QUIZ, SETTING, ASSOCIATION } from '@src/actions/constants';
import * as QUIZWATCHER from './quiz';
import * as WORRYWATCHER from './worry';
import * as SETTINGWATCHER from './setting';
import * as QUESTIONWATCHER from './question';
import * as ASSOCIATIONWATCHER from './association';

export default function* root() {
  yield takeLatest(QUESTION.SEARCH_REQUEST, QUESTIONWATCHER.onSearchRequest);

  yield takeLatest(WORRY.SEARCH_REQUEST, WORRYWATCHER.onSearchRequest);
  yield takeLatest(WORRY.CREATE_REQUEST, WORRYWATCHER.onCreateRequest);
  yield takeLatest(WORRY.UPDATE_REQUEST, WORRYWATCHER.onUpdateRequest);
  yield takeLatest(WORRY.DELETE_REQUEST, WORRYWATCHER.onDeleteRequest);
  yield takeLatest(WORRY.DETAIL_REQUEST, WORRYWATCHER.onDetailRequest);

  yield takeLatest(QUIZ.SEARCH_REQUEST, QUIZWATCHER.onSearchRequest);
  yield takeLatest(QUIZ.CREATE_REQUEST, QUIZWATCHER.onCreateRequest);
  yield takeLatest(QUIZ.UPDATE_REQUEST, QUIZWATCHER.onUpdateRequest);
  yield takeLatest(QUIZ.DELETE_REQUEST, QUIZWATCHER.onDeleteRequest);

  yield takeLatest(ASSOCIATION.SEARCH_REQUEST, ASSOCIATIONWATCHER.onSearchRequest);
  yield takeLatest(ASSOCIATION.CREATE_REQUEST, ASSOCIATIONWATCHER.onCreateRequest);
  yield takeLatest(ASSOCIATION.UPDATE_REQUEST, ASSOCIATIONWATCHER.onUpdateRequest);
  yield takeLatest(ASSOCIATION.DELETE_REQUEST, ASSOCIATIONWATCHER.onDeleteRequest);

  yield takeLatest(SETTING.SEARCH_REQUEST, SETTINGWATCHER.onSearchRequest);
  yield takeLatest(SETTING.RESCHEDULE_REQUEST, WORRYWATCHER.onRescheduleRequest);
}
