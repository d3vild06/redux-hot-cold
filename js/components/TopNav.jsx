import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import store from '../store';

export function TopNav(props) {
  const newGame = (e) => {
    e.preventDefault();
    props.dispatch(actions.createNewGame());
    console.log(store.getState());
  }

  return (
    <nav>
      <div className="new-game"><a href="#" onClick={newGame}>+New Game</a></div>
    </nav>
  );
}

export default connect()(TopNav);
