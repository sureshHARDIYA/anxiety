import { createReducer } from 'reduxsauce';
import I18n from '@src/i18n';
import { SETTING } from '@src/actions/constants';

export const INITIAL_STATE = {
  info: {
    language: 'en',
  },
  isLoading: false,
};

export const onSearchRequest = state => ({ ...state, isLoading: true });

export const onSearchSuccess = (state, { payload }) => {
  if (payload.language) {
    I18n.locale = payload.language;
  }

  return ({ ...state, isLoading: false, info: { ...payload } });
};

export const onSearchFailure = state => ({ ...state, isLoading: false });

export const ACTION_HANDLERS = {
  [SETTING.SEARCH_REQUEST]: onSearchRequest,
  [SETTING.SEARCH_SUCCESS]: onSearchSuccess,
  [SETTING.SEARCH_FAILURE]: onSearchFailure,
  [SETTING.CREATE_SUCCESS]: onSearchSuccess,
  [SETTING.UPDATE_SUCCESS]: onSearchSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
