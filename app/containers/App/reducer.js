/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SAVE_WORD
} from './constants';

// The initial state of the App
const initialState = fromJS({
  allWords: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_WORD:
    console.log('IN SAVE_WORD REDUCER');
      return state
      .setIn(['allWords'], "Mr. Moonlight");
    default:
      return state;
  }
}

export default appReducer;
