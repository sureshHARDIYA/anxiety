import * as WORRY from '@src/actions/worry';
import { put, call } from 'redux-saga/effects';
import DB from '@src/db/worry';
import DBNoti from '@src/db/notification';

export function* onSearchRequest({ cb }) {
  try {
    const items = yield call(DB.getAll, '');
    yield put(WORRY.onSearchSuccess({ payload: items }));
    cb && (yield call(cb, null, items));
  } catch (error) {
    yield put(WORRY.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onCreateRequest({ worry, cb }) {
  try {
    const item = yield call(DB.createData, worry);
    yield put(WORRY.onCreateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(WORRY.onCreateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onUpdateRequest({ worry, id, cb }) {
  try {
    const item = yield call(DB.updateData, id, worry);
    yield put(WORRY.onUpdateSuccess({ payload: item }));
    cb && (yield call(cb, null, item));
  } catch (error) {
    yield put(WORRY.onUpdateFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onDeleteRequest({ id, cb }) {
  try {
    yield call(DB.removeData, id);
    yield put(WORRY.onDeleteSuccess({ id }));
    cb && (yield call(cb, null, null));
  } catch (error) {
    yield put(WORRY.onDeleteFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onDetailRequest({ id, notificationId, cb }) {
  try {
    const item = yield call(DB.getId, `id = '${id}'`);
    yield put(WORRY.onDetailSuccess({ item }));
    cb && (yield call(cb, null, item));
    yield call(DBNoti.updateData, notificationId, { status: true });
  } catch (error) {
    yield put(WORRY.onDetailFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}
