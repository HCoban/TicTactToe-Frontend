import { expect } from '../test_helper';
import CellReducer from '../../src/reducers/cell_reducer';
import { CellConstants } from '../../src/actions/cell_actions';

describe('Cell Reducer', () => {
  it('handles unknown type actions', () => {
    expect(CellReducer(undefined, {})).to.eql({});
  });

  it('handles ADD_CELL_VALUE in empty state', () => {
    const action = {
      type: CellConstants.ADD_CELL_VALUE,
      move: "A3",
      value: "X"
    };

    expect(CellReducer({}, action)).to.eql({A3: "X"});
  });

  it('handles ADD_CELL_VALUE in non-empty state', () => {
    const action = {
      type: CellConstants.ADD_CELL_VALUE,
      move: "A3",
      value: "X"
    };

    const existingState = { A1: "X", B2: "O" };
    expect(CellReducer(existingState, action)).to.eql({
      A1: "X",
      B2: "O",
      A3: "X"
    });
  });
});