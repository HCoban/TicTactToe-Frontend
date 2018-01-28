import { MoveConstants } from '../actions/move_actions';

const MoveReducer = (state = [], action) => {
  switch(action.type) {
    case MoveConstants.RECEIVE_LAST_MOVE:
      return [...state, action.move];
    default:
      return state;
  }
};

export default MoveReducer;