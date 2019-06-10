import * as QUIZ from '@src/actions/quiz';
import { put, call } from 'redux-saga/effects';
import DB from '@src/db/response';

export function* onSearchRequest({ cb }) {
  try {
    const items = yield call(DB.getAll, '');
    yield put(QUIZ.onSearchSuccess({ payload: items }));
    cb && (yield call(cb, null, items));
  } catch (error) {
    yield put(QUIZ.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onCreateRequest({ quiz, cb }) {
  try {
    const item = yield call(DB.createData, quiz);
    yield put(QUIZ.onCreateSuccess({ payload: item }));
    cb && (yield call(cb, null, quiz));
  } catch (error) {
    yield put(QUIZ.onCreateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onUpdateRequest({ quiz, id, cb }) {
  try {
    const item = yield call(DB.updateData, id, quiz);
    yield put(QUIZ.onUpdateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(QUIZ.onUpdateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onDeleteRequest({ id, cb }) {
  try {
    console.log('id:', id);
    yield call(DB.removeData, id);
    yield put(QUIZ.onDeleteSuccess({ id }));
    cb && (yield call(cb, null, null));
  } catch (error) {
    yield put(QUIZ.onDeleteFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}
