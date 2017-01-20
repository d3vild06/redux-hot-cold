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


export const FETCH_FEWESTGUESSES_SUCCESS = 'FETCH_FEWESTGUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (count) => ({
  type: FETCH_FEWESTGUESSES_SUCCESS,
  fewestGuesses: count
});


export const FETCH_FEWESTGUESSES_ERROR = 'FETCH_FEWESTGUESSES_ERROR';
export const fetchFewestGuessesError = (error) => ({
  type: FETCH_FEWESTGUESSES_ERROR,
  errorMessage: error
});

export const fetchFewestGuesses = () => dispatch => {
  const url = 'http://localhost:8081/fewest-guesses';
  return fetch(url).then(response => {
    if (!response.ok) {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(count =>
      //console.log(data)
      dispatch(fetchFewestGuessesSuccess(count))
    )
    .catch(error =>
    dispatch(fetchFewestGuessesError(error))
    );
};


export const SAVE_FEWESTGUESSES_SUCCESS = 'SAVE_FEWESTGUESSES_SUCCESS';
export const saveFewestGuessesSuccess = count => ({
  type: SAVE_FEWESTGUESSES_SUCCESS,
  fewestGuesses: count
})

export const SAVE_FEWESTGUESSES_ERROR = 'SAVE_FEWESTGUESSES_ERROR';
export const saveFewestGuessesError = error => ({
  type: SAVE_FEWESTGUESSES_ERROR,
  errorMessage: error
})

export const saveFewestGuesses = count => dispatch => {
  console.log('count passed in: ', count);
  const url = 'http://localhost:8081/fewest-guesses';
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({count: count})
  })
  .then(response => {
    if (!response.ok) {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(data =>
    dispatch(saveFewestGuessesSuccess(data.count))
  )
  .catch(error =>
    dispatch(saveFewestGuessesError(error)))
  };
