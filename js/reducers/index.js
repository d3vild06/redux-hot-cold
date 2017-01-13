import * as actions from '../actions/index';
import update from 'immutability-helper';

const initialState = {
  guessNumber: '',
  userGuess: [],
  guessCount: 0,
  newGame: false,
  message: ''
}

export const GuessNumberReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return [...state, {
        guessNumber: actions.generateRandNum().guessNumber,
        newGame: true
      }]
      break;
    case 'GUESS_NUMBER':
      update(state, {guessCount: {$set: state.guessCount++}});
      if (action.userGuess === state.guessNumber) {
        udpate(state, {
          message: {$set: 'You guessed right!'},
          userGuess: {$push: [action.userGuess]}
        });
      }
      update(state, {
        message: {$set: 'You guessed wrong!'},
        userGuess: {$push: [action.userGuess]}
      });
      break;
    default:
      console.log('Invalid Action');
      return 'Invalid action';
  }
  return state;
}
