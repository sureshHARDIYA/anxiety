import { createSelector } from 'reselect';

export const reducer = state => state.worry || {};

export const getLoading = () => createSelector(reducer, state => state.isLoading || false);

export const getList = () => createSelector(reducer, state => state.list || []);
