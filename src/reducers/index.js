import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import CellReducer from './cell_reducer';
import GameReducer from './game_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  form,
  cells: CellReducer,
  game: GameReducer,
  error: ErrorReducer
});

export default RootReducer;