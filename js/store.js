import { createStore } from 'redux';
import * as reducers from './js/reducers/index';
import * as actions from './js/actions/index';

export const store = createStore(reducers.GuessNumberReducer);

// store.dispatch(actions.NEW_GAME);
// console.log('hello world');
// console.log(store.getState());
