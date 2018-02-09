import * as MoveUtil from "../util/move_util";
import { addCellValue } from "../actions/cell_actions";
import { receiveGame } from "../actions/game_actions";
import { addError, removeError } from "./error_actions";

export const createMove = moveParams => dispatch =>
  MoveUtil.createMove(moveParams)
    .then(response => {
      dispatch(addCellValue(response.move, response.value));
      dispatch(receiveGame(response.game));
      dispatch(removeError());
    })
    .catch((response) => {
      dispatch(addError(response.status));
    });
