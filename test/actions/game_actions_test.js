import { expect } from '../test_helper';
import { receiveGame } from '../../src/actions/game_actions';

describe('Game actions', () => {
  describe('receiveGame', () => {
    it('has correct type', () => {
      expect(receiveGame().type).to.equal('RECEIVE_GAME')
    });

    it('has correct payload', () => {
      const game = {
        id: 1,
        token: 'dfsfewf4ir43rh32hrfiufbierbi',
        playerOne: 'name',
        playerTwo: 'anotherName',
        completed: false,
        winner: null
      };

      expect(receiveGame(game).game).to.equal(game);
    })
  });
})