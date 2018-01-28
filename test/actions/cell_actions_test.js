import { expect } from '../test_helper';
import { CellConstants, addCellValue } from '../../src/actions/cell_actions';

describe('Cell actions', () => {
  describe('addCellValue', () => {
    it('has correct type', () => {
      expect(addCellValue().type).to.equal(CellConstants.ADD_CELL_VALUE);
    });

    it('has correct payload', () => {
      const move = "A3";
      const value = "X";
      expect(addCellValue(move, value).move).to.equal("A3");
      expect(addCellValue(move, value).value).to.equal("X");
    });
  });
});