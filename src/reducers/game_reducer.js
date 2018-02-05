import { GameConstants } from '../actions/game_actions';
import merge from 'lodash/merge';
import { debug } from 'util';

const defaultState = {
  completed: false,
  winner: null
}

const GameReducer = (state = {}, action) => {
  switch(action.type) {
    case GameConstants.RECEIVE_GAME:
      return merge({}, state, { [action.game.id]: action.game});
    default:
      return state;
  }
}

export default GameReducer;