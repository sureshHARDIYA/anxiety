import * as SETTING from '@src/actions/setting';
import { put, call } from 'redux-saga/effects';
import DB from '@src/db/setting';

export function* onSearchRequest({ cb }) {
  try {
    const items = yield call(DB.getAll, '');
    yield put(SETTING.onSearchSuccess({ payload: (items || [])[0] || {} }));
    cb && (yield call(cb, null, items));
  } catch (error) {
    yield put(SETTING.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onCreateRequest({ setting, cb }) {
  try {
    const item = yield call(DB.createData, setting);
    yield put(SETTING.onCreateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(SETTING.onCreateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onUpdateRequest({ setting, id, cb }) {
  try {
    const item = yield call(DB.updateData, id, setting);
    yield put(SETTING.onUpdateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(SETTING.onUpdateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}
