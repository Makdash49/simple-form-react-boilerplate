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
  console.log('IN THE APP REDUCER');
  switch (action.type) {
    case SAVE_WORD:
      return state
        .setIn('allWords', "Mr. Moooonlight!!!!");
    default:
      return state;
  }
}

export default appReducer;
