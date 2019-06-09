import { createSelector } from 'reselect';

export const reducer = state => state.quiz || {};

export const getLoading = () => createSelector(reducer, state => state.isLoading || false);

export const getList = () => createSelector(reducer, state => (state.list || []).map((result) => {
  try {
    const item = [...result.item].map(i => JSON.parse(i));
    const score = item.reduce((total, { answer }) => total + answer[0].valueCoding.extension[0].valueDecimal, 0);
    return { ...result, item, score };
  } catch (e) {
    return { ...result, score: 0 };
  }
}));
