import { createSelector } from 'reselect';

export const reducer = state => state.app || {};

export const getDrawer = () => createSelector(reducer, state => state.drawer.open || false);
