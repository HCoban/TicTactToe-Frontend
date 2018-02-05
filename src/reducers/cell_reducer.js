import { CellConstants } from '../actions/cell_actions';
import merge from 'lodash/merge';

const CellReducer = (state = {}, action) => {
  switch(action.type) {
    case CellConstants.ADD_CELL_VALUE:
      let currentStep = Object.keys(state).length;
      let cell = {
        value: action.value,
        step: currentStep + 1
      }
      const newValue = { [action.move]: cell };
      return merge({}, state, newValue);
    case CellConstants.ADD_ALL_CELLS:
      let newState = {}
      action.moves.forEach(move => {
        newState[move.move] = {
          value: move.value,
          step: move.step
        }
      });
      return newState;
    default:
      return state;
  }
};

export default CellReducer;