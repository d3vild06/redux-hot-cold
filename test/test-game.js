import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import { expect } from 'chai';

import { Game } from '../js/components/Game';
import Header from '../js/components/Header';
import { GameForm }from '../js/components/GameForm';
import { GuessList } from  '../js/components/GuessList';

describe('Game component', function() {
  const defaultProps = {
    message: 'Make a guess',
    guessCount: 1,
    userGuess: 7
  };

  it('contains the <Header /> component', function() {
    const wrapper = shallow(<Game />);
    // console.log(wrapper);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('contains the <GameForm /> component', function() {
    const wrapper = shallow(<Game />);
    // console.log(wrapper.node.props);
    expect(wrapper.find(GameForm)).to.have.lengthOf(1);
  });

  it('contains the <GuessList /> component', function() {
    const wrapper = shallow(<Game />);
    // console.log(wrapper.node.props);
    expect(wrapper.find(GuessList)).to.have.lengthOf(1);
  });




});
