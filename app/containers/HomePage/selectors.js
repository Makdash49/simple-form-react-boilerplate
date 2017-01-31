/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectWord = () => createSelector(
  selectHome,
  (homeState) => homeState.get('word')
);

export {
  selectHome,
  makeSelectWord,
};
