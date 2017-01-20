import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/index';
// import GuessList from './GuessList';

export class GameForm extends Component {

  constructor(props) {
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchFewestGuesses());

  }

  componentDidUpdate(prevProps) {
    if (this.props.gameCompleted !== prevProps.gameCompleted) {
      console.log('state changed on game status!');
      this.props.dispatch(actions.saveFewestGuesses(this.props.userGuess.length));
    }
  };

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

const mapStateToProps = (state, props) => ({
  gameCompleted: state.gameCompleted,
  fewestGuesses: state.fewestGuesses,
  userGuess: state.userGuess
});

export default connect(mapStateToProps)(GameForm);
