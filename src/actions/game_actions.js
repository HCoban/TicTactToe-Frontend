import * as GameUtil from '../util/game_util';
import { addAllCells } from './cell_actions';
import { hashHistory } from 'react-router';

export const GameConstants = {
  RECEIVE_GAME: "RECEIVE_GAME",
  END_GAME: "END_GAME",
};

export const receiveGame = game => ({
  type: GameConstants.RECEIVE_GAME,
  game
});

export const createGame = (players) => dispatch => {
  return GameUtil.createGame(players)
    .then(response => {
      localStorage.setItem('token', response.game.token)
      hashHistory.push(`/games/${response.game.id}?token=${response.game.token}`)
      dispatch(receiveGame(response.game));
    });
  }

export const requestGame = (id) => dispatch => {
  return GameUtil.requestGame(id)
    .then(response => {
      dispatch(receiveGame(response.game))
      if (response.marks.length > 0) {
        dispatch(addAllCells(response.marks))
      }
    })
}