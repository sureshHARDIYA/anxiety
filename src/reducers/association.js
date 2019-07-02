import { createReducer } from 'reduxsauce';
import { ASSOCIATION } from '@src/actions/constants';

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
  [ASSOCIATION.SEARCH_REQUEST]: onSearchRequest,
  [ASSOCIATION.SEARCH_SUCCESS]: onSearchSuccess,
  [ASSOCIATION.SEARCH_FAILURE]: onSearchFailure,
  [ASSOCIATION.CREATE_SUCCESS]: onCreateSuccess,
  [ASSOCIATION.UPDATE_SUCCESS]: onUpdateSuccess,
  [ASSOCIATION.DELETE_REQUEST]: onDeleteSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
