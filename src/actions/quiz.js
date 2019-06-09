import { QUIZ } from './constants';

export const onSearchRequest = (params = {}) => ({ ...params, type: QUIZ.SEARCH_REQUEST });
export const onSearchFailure = (params = {}) => ({ ...params, type: QUIZ.SEARCH_FAILURE });
export const onSearchSuccess = (params = {}) => ({ ...params, type: QUIZ.SEARCH_SUCCESS });

export const onCreateRequest = (params = {}) => ({ ...params, type: QUIZ.CREATE_REQUEST });
export const onCreateFailure = (params = {}) => ({ ...params, type: QUIZ.CREATE_FAILURE });
export const onCreateSuccess = (params = {}) => ({ ...params, type: QUIZ.CREATE_SUCCESS });

export const onUpdateRequest = (params = {}) => ({ ...params, type: QUIZ.UPDATE_REQUEST });
export const onUpdateFailure = (params = {}) => ({ ...params, type: QUIZ.UPDATE_FAILURE });
export const onUpdateSuccess = (params = {}) => ({ ...params, type: QUIZ.UPDATE_SUCCESS });

export const onDeleteRequest = (params = {}) => ({ ...params, type: QUIZ.DELETE_REQUEST });
export const onDeleteFailure = (params = {}) => ({ ...params, type: QUIZ.DELETE_FAILURE });
export const onDeleteSuccess = (params = {}) => ({ ...params, type: QUIZ.DELETE_SUCCESS });
