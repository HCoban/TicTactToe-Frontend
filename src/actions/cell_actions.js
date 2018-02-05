export const CellConstants = {
  ADD_CELL_VALUE: "ADD_CELL_VALUE",
  ADD_ALL_CELLS: "ADD_ALL_CELLS"
};

export const addCellValue = (move, value) => ({
  type: CellConstants.ADD_CELL_VALUE,
  move,
  value
});

export const addAllCells = moves => ({
  type: CellConstants.ADD_ALL_CELLS,
  moves
});