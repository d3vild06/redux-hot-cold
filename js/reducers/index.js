import * as actions from '../actions/index';
import update from 'immutability-helper';
import store from '../store';

const initialState = {
  correctNumber: actions.generateRandNum().guessNumber,
  userGuess: [],
  newGame: false,
  message: 'Make Your Guess!',
  fewestGuesses: null
};

export const GuessNumberReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
    console.log('new game action requested');
      return update(initialState, {
        newGame: {$set: true}
      });
      break;
    case 'GUESS_NUMBER':
      let userGuess = parseInt(action.userGuess, 10);
      // check for non integers submitted
      if (isNaN(userGuess)) {
        return update(state, {
          message: {$set: 'You must enter a valid number'}
        });
      }
      if (userGuess != state.correctNumber) {
        return update(state, {
          message: {$set: 'You guessed wrong!'},
          userGuess: {$push: [userGuess]}
        });
      }

      return update(state, {
        message: {$set: 'You guessed right!'},
        userGuess: {$push: [action.userGuess]}
      });
      break;
    case 'FETCH_FEWESTGUESSES_SUCCESS':
      console.log('fewest guesses');
      console.log(action.fewestGuesses);
      return update(state, {
        fewestGuesses: {$set: action.fewestGuesses}
      });
      break;

    default:
      console.log('Invalid Action');
      return state;
      break;
  }
};
