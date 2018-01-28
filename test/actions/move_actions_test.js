import { expect } from '../test_helper';
import { MoveConstants, receiveLastMove } from '../../src/actions/move_actions';

describe('Move actions', () => {
  describe('receiveLastMove', () => {
    it('has correct type', () => {
      expect(receiveLastMove().type).to.equal(MoveConstants.RECEIVE_LAST_MOVE);
    });

    it('has correct payload', () => {
      const move = "A1";
      expect(receiveLastMove(move).move).to.equal("A1");
    });
  });
});