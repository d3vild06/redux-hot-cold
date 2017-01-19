import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../js/reducers/index';

export default createStore(reducers.GuessNumberReducer, applyMiddleware(thunk));

// store.dispatch(actions.NEW_GAME);
// console.log('hello world');
// console.log(store.getState());
