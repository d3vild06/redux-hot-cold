import React from 'react';
import {connect} from 'react-redux';

export function GuessList(props) {
  let guesses = props.userGuess.map(function(guess, index) {
    return (
      <li key={index}>
        {guess}
      </li>
    );
  });

  return (
    <div>
      <ul id="guessList" className='guess-list-box'>
        {guesses}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  userGuess: state.userGuess
});

export default connect(mapStateToProps)(GuessList);
