'use strict';
import fetch from 'isomorphic-fetch';
// start new game
// generate random number to guess
// guess number

export const NEW_GAME = 'NEW_GAME';
export const createNewGame = () => ({
  type: NEW_GAME
});

export const GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
export const generateRandNum = () => {
  let min = Math.ceil(1);
  let max = Math.floor(10);
  let guessNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return  {
    type: GENERATE_RANDOM_NUMBER,
    guessNumber: guessNumber
  }
};


export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (userGuess) => ({
  type: GUESS_NUMBER,
  userGuess
});

// export const FETCH_FEWESTGUESSES_SUCCESS = 'FETCH_FEWESTGUESSES_SUCCESS';
// export const fetchFewestGuesses = (count)
