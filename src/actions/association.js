import { ASSOCIATION } from './constants';

export const onSearchRequest = (params = {}) => ({ ...params, type: ASSOCIATION.SEARCH_REQUEST });
export const onSearchFailure = (params = {}) => ({ ...params, type: ASSOCIATION.SEARCH_FAILURE });
export const onSearchSuccess = (params = {}) => ({ ...params, type: ASSOCIATION.SEARCH_SUCCESS });

export const onCreateRequest = (params = {}) => ({ ...params, type: ASSOCIATION.CREATE_REQUEST });
export const onCreateFailure = (params = {}) => ({ ...params, type: ASSOCIATION.CREATE_FAILURE });
export const onCreateSuccess = (params = {}) => ({ ...params, type: ASSOCIATION.CREATE_SUCCESS });

export const onUpdateRequest = (params = {}) => ({ ...params, type: ASSOCIATION.UPDATE_REQUEST });
export const onUpdateFailure = (params = {}) => ({ ...params, type: ASSOCIATION.UPDATE_FAILURE });
export const onUpdateSuccess = (params = {}) => ({ ...params, type: ASSOCIATION.UPDATE_SUCCESS });

export const onDeleteRequest = (params = {}) => ({ ...params, type: ASSOCIATION.DELETE_REQUEST });
export const onDeleteFailure = (params = {}) => ({ ...params, type: ASSOCIATION.DELETE_FAILURE });
export const onDeleteSuccess = (params = {}) => ({ ...params, type: ASSOCIATION.DELETE_SUCCESS });
