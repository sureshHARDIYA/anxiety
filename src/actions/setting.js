import { SETTING } from './constants';

export const onSearchRequest = (params = {}) => ({ ...params, type: SETTING.SEARCH_REQUEST });
export const onSearchFailure = (params = {}) => ({ ...params, type: SETTING.SEARCH_FAILURE });
export const onSearchSuccess = (params = {}) => ({ ...params, type: SETTING.SEARCH_SUCCESS });

export const onCreateRequest = (params = {}) => ({ ...params, type: SETTING.CREATE_REQUEST });
export const onCreateFailure = (params = {}) => ({ ...params, type: SETTING.CREATE_FAILURE });
export const onCreateSuccess = (params = {}) => ({ ...params, type: SETTING.CREATE_SUCCESS });

export const onUpdateRequest = (params = {}) => ({ ...params, type: SETTING.UPDATE_REQUEST });
export const onUpdateFailure = (params = {}) => ({ ...params, type: SETTING.UPDATE_FAILURE });
export const onUpdateSuccess = (params = {}) => ({ ...params, type: SETTING.UPDATE_SUCCESS });
