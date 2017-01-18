import React from 'react';
import GameForm from  './GameForm';
import { connect } from  'react-redux';
import * as actions from '../actions/index';
import store  from '../store';
import Header from  './Header';
import GuessList from './GuessList';

export class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <GameForm message={this.props.message} guessCount={this.props.guessCount} userGuess={this.props.userGuess}/>
        <GuessList />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  message: state.message,
  userGuess: state.userGuess,
  correctNumber: state.correctNumber
});

export default connect(mapStateToProps)(Game);
console.log(store.getState());
