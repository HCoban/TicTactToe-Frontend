import * as MoveUtil from '../util/move_util';

export const MoveConstants = {
  RECEIVE_LAST_MOVE: "RECEIVE_LAST_MOVE"
};

export const receiveLastMove = move => ({
  type: MoveConstants.RECEIVE_LAST_MOVE,
  move
});

export const createMove = move => dispatch => (
  MoveUtil.createMove(move)
    .then(response => {
      dispatch(receiveLastMove(response));
    })
    .catch(() => {
      // TODO show error
    })
);