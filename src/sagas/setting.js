import { AsyncStorage } from 'react-native';
import * as SETTING from '@src/actions/setting';
import { put, call } from 'redux-saga/effects';

export function* onSearchRequest({ cb }) {
  try {
    const setting = JSON.parse(yield call(AsyncStorage.getItem, 'setting') || '{}');
    yield put(SETTING.onSearchSuccess({ payload: setting || {} }));
    cb && (yield call(cb, null, setting));
  } catch (error) {
    yield put(SETTING.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}

export function* onRescheduleRequest({ cb }) {
  try {
    const setting = JSON.parse(yield call(AsyncStorage.getItem, 'setting') || '{}');
    yield put(SETTING.onSearchSuccess({ payload: setting || {} }));
    cb && (yield call(cb, null, setting));
  } catch (error) {
    yield put(SETTING.onSearchFailure({ error }));
    cb && (yield call(cb, error, null));
  }
}
