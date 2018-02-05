import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CellReducer from './cell_reducer';
import GameReducer from './game_reducer';

const RootReducer = combineReducers({
  form,
  cells: CellReducer,
  game: GameReducer
});

export default RootReducer;