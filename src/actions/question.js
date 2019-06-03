import { QUESTION } from './constants';

export const onSearchRequest = (params = {}) => ({ ...params, type: QUESTION.SEARCH_REQUEST });

export const onSearchFailure = (params = {}) => ({ ...params, type: QUESTION.SEARCH_FAILURE });

export const onSearchSuccess = (params = {}) => ({ ...params, type: QUESTION.SEARCH_SUCCESS });
