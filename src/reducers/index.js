import { combineReducers } from 'redux';
import MoveReducer from './move_reducer';

const RootReducer = combineReducers({
  move: MoveReducer
});

export default RootReducer;