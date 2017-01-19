import React, {
  Component,
  PropTypes,
} from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
// import GuessList from './GuessList';

export class GameForm extends Component {

  constructor(props) {
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }

  submitGuess(e) {
    e.preventDefault();
    let userGuess = this.userGuess.value;
    this.props.dispatch(actions.guessNumber(userGuess));
    this.userGuess.value = '';
  }

  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        <form onSubmit={this.submitGuess}>
          <input type="text" placeholder="enter your guess number" ref={ref => this.userGuess = ref} />
          <button>Guess</button>
        </form>
        <p id="guess-count">Guess Count: {this.props.userGuess.length} </p>
        <p>Your best score (least amount of guesses) is: {this.props.fewestGuesses}</p>
      </div>
    );
  }
}

export default connect()(GameForm);
