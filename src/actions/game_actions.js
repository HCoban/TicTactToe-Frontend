import * as GameUtil from "../util/game_util";
import { addAllCells } from "./cell_actions";
import { hashHistory } from "react-router";
import { removeError } from "./error_actions";

export const GameConstants = {
  RECEIVE_GAME: "RECEIVE_GAME",
  END_GAME: "END_GAME"
};

export const receiveGame = game => ({
  type: GameConstants.RECEIVE_GAME,
  game
});

export const createGame = players => dispatch => {
  return GameUtil.createGame(players).then(response => {
    dispatch(removeError());
    localStorage.setItem("token", response.game.token);
    dispatch(addAllCells([]));
    hashHistory.push(`/games/${response.game.id}?token=${response.game.token}`);
    dispatch(receiveGame(response.game));
  });
};

export const requestGame = id => dispatch => {
  return GameUtil.requestGame(id).then(response => {
    dispatch(removeError());
    dispatch(receiveGame(response.game));
    dispatch(addAllCells(response.marks));
  });
};
