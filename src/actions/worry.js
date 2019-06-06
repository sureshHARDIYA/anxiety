import { WORRY } from './constants';

export const onSearchRequest = (params = {}) => ({ ...params, type: WORRY.SEARCH_REQUEST });
export const onSearchFailure = (params = {}) => ({ ...params, type: WORRY.SEARCH_FAILURE });
export const onSearchSuccess = (params = {}) => ({ ...params, type: WORRY.SEARCH_SUCCESS });

export const onCreateRequest = (params = {}) => ({ ...params, type: WORRY.CREATE_REQUEST });
export const onCreateFailure = (params = {}) => ({ ...params, type: WORRY.CREATE_FAILURE });
export const onCreateSuccess = (params = {}) => ({ ...params, type: WORRY.CREATE_SUCCESS });

export const onUpdateRequest = (params = {}) => ({ ...params, type: WORRY.UPDATE_REQUEST });
export const onUpdateFailure = (params = {}) => ({ ...params, type: WORRY.UPDATE_FAILURE });
export const onUpdateSuccess = (params = {}) => ({ ...params, type: WORRY.UPDATE_SUCCESS });

export const onDeleteRequest = (params = {}) => ({ ...params, type: WORRY.DELETE_REQUEST });
export const onDeleteFailure = (params = {}) => ({ ...params, type: WORRY.DELETE_FAILURE });
export const onDeleteSuccess = (params = {}) => ({ ...params, type: WORRY.DELETE_SUCCESS });
