import * as MoveUtil from '../util/move_util';
import { addCellValue } from '../actions/cell_actions';

export const MoveConstants = {
  RECEIVE_LAST_MOVE: "RECEIVE_LAST_MOVE"
};

export const receiveLastMove = move => ({
  type: MoveConstants.RECEIVE_LAST_MOVE,
  move
});

export const createMove = (move, value) => dispatch => (
  MoveUtil.createMove(move, value)
    .then(response => {
      dispatch(receiveLastMove(response.move));
      dispatch(addCellValue(response.move, response.value));
    })
    .catch(() => {
      // TODO show error
    })
);