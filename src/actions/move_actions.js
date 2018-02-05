import * as MoveUtil from '../util/move_util';
import { addCellValue } from '../actions/cell_actions';
import { receiveGame } from '../actions/game_actions';

export const createMove = (moveParams) => dispatch => (
  MoveUtil.createMove(moveParams)
    .then(response => {
      dispatch(addCellValue(response.move, response.value));
      dispatch(receiveGame(response.game))
    })
    .catch(() => {
      // TODO show error
    })
);