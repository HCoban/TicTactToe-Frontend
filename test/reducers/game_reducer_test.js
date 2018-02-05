import { expect } from '../test_helper';
import GameReducer from '../../src/reducers/game_reducer';
import { GameConstants } from '../../src/actions/game_actions';

describe('Game Reducer', () => {
  it('handles unknown type actions', () => {
    expect(GameReducer(undefined, {})).to.eql({});
  });

  it('handles RECEIVE_GAME action', () => {
    const game = { id: 1, playerOne: 'a', playerTwo: 'b', token: 'token' };
    const action = {
      type: GameConstants.RECEIVE_GAME,
      game: game
    };

    expect(GameReducer({}, action)).to.eql({
      1: game
    });
  })
})