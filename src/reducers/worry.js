import { createReducer } from 'reduxsauce';
import { WORRY } from '@src/actions/constants';

export const INITIAL_STATE = {
  list: [],
  isLoading: false,
};

export const onSearchRequest = state => ({ ...state, isLoading: true });

export const onSearchSuccess = (state, { payload }) => ({ ...state, isLoading: false, list: [...(payload || [])] });

export const onSearchFailure = state => ({ ...state, isLoading: false });

export const onCreateSuccess = (state, { payload }) => ({ ...state, isLoading: false, list: [payload, ...state.list] });

export const onUpdateSuccess = (state, { payload }) => ({ ...state, isLoading: false, list: [...state.list].map(item => (item.id === payload.id ? payload : item)) });

export const onDeleteSuccess = (state, { id }) => ({ ...state, isLoading: false, list: [...state.list].filter(item => item.id !== id) });

export const ACTION_HANDLERS = {
  [WORRY.SEARCH_REQUEST]: onSearchRequest,
  [WORRY.SEARCH_SUCCESS]: onSearchSuccess,
  [WORRY.SEARCH_FAILURE]: onSearchFailure,
  [WORRY.CREATE_SUCCESS]: onCreateSuccess,
  [WORRY.UPDATE_SUCCESS]: onUpdateSuccess,
  [WORRY.DELETE_REQUEST]: onDeleteSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
