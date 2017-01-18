import React from 'react';
import { shallow, render, mount } from 'enzyme';
import chai from 'chai';
import store from '../js/store';
import { Provider } from 'react-redux';
import { expect } from 'chai';

import { Game } from '../js/components/Game';
import Header from '../js/components/Header';
import GameForm from '../js/components/GameForm';
import { GuessList } from '../js/components/GuessList';

describe('Game component', function() {
  const defaultProps = {
    message: 'Make a guess',
    guessCount: 1,
    userGuess: 7
  };

  it('contains the <Header /> component', function() {
    const wrapper = shallow(<Game />);
    console.log(wrapper.node.props);
    // expect(wrapper.find(Header)).to.have.length(1);
    expect(wrapper.contains([<Header />, <GuessList />])).to.equal(true);
  });

  // it('contains the <GameForm /> component', function() {
  //   const wrapper = shallow(<Game />);
  //   console.log(wrapper.node.props);
  //   expect(wrapper.find(GameForm)).to.have.length(1);
  // });




});
