import { APP } from './constants';

export const onDrawerRequest = (params = {}) => ({ ...params, type: APP.DRAWER_REQUEST });
export const onDrawerFailure = (params = {}) => ({ ...params, type: APP.DRAWER_FAILURE });
export const onDrawerSuccess = (params = {}) => ({ ...params, type: APP.DRAWER_SUCCESS });
