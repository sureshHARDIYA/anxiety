import { createSelector } from 'reselect';

export const reducer = state => state.setting || {};

export const getLoading = () => createSelector(reducer, state => state.isLoading || false);

export const getInfo = () => createSelector(reducer, state => state.info || {});
