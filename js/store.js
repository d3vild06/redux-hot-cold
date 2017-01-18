import { createStore } from 'redux';
import * as reducers from '../js/reducers/index';

export default createStore(reducers.GuessNumberReducer);

// store.dispatch(actions.NEW_GAME);
// console.log('hello world');
// console.log(store.getState());
