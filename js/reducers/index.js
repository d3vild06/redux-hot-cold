import * as actions from '../actions/index';
import update from 'immutability-helper';
import store from '../store';

const initialState = {
  correctNumber: actions.generateRandNum().guessNumber,
  userGuess: [],
  newGame: false,
  message: 'Make Your Guess!',
  fewestGuesses: null,
  gameCompleted: false
};

export const GuessNumberReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_GAME':
    console.log('new game action requested');
      return update(state, {
        correctNumber: {$set: initialState.correctNumber},
        newGame: {$set: true},
        userGuess: {$set: []},
        message: {$set: initialState.message},
        gameCompleted: {$set: initialState.gameCompleted}
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
        userGuess: {$push: [action.userGuess]},
        gameCompleted: {$set: true}
      });
      break;

    case 'FETCH_FEWESTGUESSES_SUCCESS':
      console.log('fetching fewest guesses...');
      return update(state, {
        fewestGuesses: {$set: action.fewestGuesses}
      });
      break;

    case 'SAVE_FEWESTGUESSES_SUCCESS':
    console.log('saving fewest guesses to server...');
    console.log('count passed inside action: ', action.fewestGuesses);
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
