import { createReducer } from 'reduxsauce';
import { APP } from '@src/actions/constants';

export const INITIAL_STATE = {
  drawer: {
    open: false
  },
};

export const onDrawerRequest = (state, { open }) => ({ ...state, drawer: { ...state.drawer, open } });

export const ACTION_HANDLERS = {
  [APP.DRAWER_REQUEST]: onDrawerRequest,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
