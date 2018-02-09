import { expect } from "../test_helper";
import {
  CellConstants,
  addCellValue,
  addAllCells
} from "../../src/actions/cell_actions";

describe("Cell actions", () => {
  describe("addCellValue", () => {
    it("has correct type", () => {
      expect(addCellValue().type).to.equal(CellConstants.ADD_CELL_VALUE);
    });

    it("has correct payload", () => {
      const move = "A3";
      const value = "X";
      expect(addCellValue(move, value).move).to.equal("A3");
      expect(addCellValue(move, value).value).to.equal("X");
    });
  });

  describe("addAllCells", () => {
    it("has correct type", () => {
      expect(addAllCells().type).to.equal(CellConstants.ADD_ALL_CELLS);
    });

    it("has correct payload", () => {
      const moves = [
        { move: "A1", value: "X", step: 1 },
        { move: "A3", value: "O", step: 2 },
        { move: "B2", value: "X", step: 3 }
      ];
      expect(addAllCells(moves).moves).to.equal(moves);
    });
  });
});
