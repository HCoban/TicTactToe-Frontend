import { combineReducers } from 'redux';
import MoveReducer from './move_reducer';
import CellReducer from './cell_reducer';

const RootReducer = combineReducers({
  move: MoveReducer,
  cells: CellReducer
});

export default RootReducer;