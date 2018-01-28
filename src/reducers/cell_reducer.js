import { CellConstants } from '../actions/cell_actions';
import merge from 'lodash/merge';

const CellReducer = (state = {}, action) => {
  switch(action.type) {
    case CellConstants.ADD_CELL_VALUE:
      const newValue = { [action.move]: action.value };
      return merge({}, state, newValue);
    default:
      return state;
  }
};

export default CellReducer;