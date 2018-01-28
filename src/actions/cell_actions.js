export const CellConstants = {
  ADD_CELL_VALUE: "ADD_CELL_VALUE"
};

export const addCellValue = (move, value) => ({
  type: CellConstants.ADD_CELL_VALUE,
  move,
  value
});