import * as ASSOCIATION from '@src/actions/association';
import { put, call } from 'redux-saga/effects';
import DB from '@src/db/association';

export function* onSearchRequest({ cb }) {
  try {
    const items = yield call(DB.getAll, '');
    yield put(ASSOCIATION.onSearchSuccess({ payload: items }));
    cb && (yield call(cb, null, items));
  } catch (error) {
    yield put(ASSOCIATION.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onCreateRequest({ association, cb }) {
  try {
    const item = yield call(DB.createData, association);
    yield put(ASSOCIATION.onCreateSuccess({ payload: item }));
    cb && (yield call(cb, null, association));
  } catch (error) {
    yield put(ASSOCIATION.onCreateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onUpdateRequest({ association, id, cb }) {
  try {
    const item = yield call(DB.updateData, id, association);
    yield put(ASSOCIATION.onUpdateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(ASSOCIATION.onUpdateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onDeleteRequest({ id, cb }) {
  try {
    yield call(DB.removeData, id);
    yield put(ASSOCIATION.onDeleteSuccess({ id }));
    cb && (yield call(cb, null, null));
  } catch (error) {
    yield put(ASSOCIATION.onDeleteFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}
