import { expect } from '../test_helper';
import MoveReducer from '../../src/reducers/move_reducer';
import { MoveConstants } from '../../src/actions/move_actions';

describe('Move reducer', () => {
  it('handles unknown type actions', () => {
    expect(MoveReducer(undefined, {})).to.eql([]);
  });

  it('handles RECEIVE_LAST_MOVE', () => {
    const action = {
      type: MoveConstants.RECEIVE_LAST_MOVE,
      move: 'A3'
    };

    expect(MoveReducer([], action)).to.eql(['A3']);
  });
});