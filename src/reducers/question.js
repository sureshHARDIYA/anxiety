import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import { QUESTION } from '@src/actions/constants';

export const INITIAL_STATE = fromJS({
  list: [],
  isLoading: false,
});

export const onSearchRequest = state => state.setIn(['isLoading'], true);

export const onSearchSuccess = (state, { payload }) => state.setIn(['isLoading'], false).setIn(['list'], fromJS(payload));

export const onSearchFailure = state => state.setIn(['isLoading'], false);

export const ACTION_HANDLERS = {
  [QUESTION.SEARCH_REQUEST]: onSearchRequest,
  [QUESTION.SEARCH_SUCCESS]: onSearchSuccess,
  [QUESTION.SEARCH_FAILURE]: onSearchFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
