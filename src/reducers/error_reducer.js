import { ErrorConstants } from '../actions/error_actions';

const ErrorReducer = (state = null, action) => {
  switch(action.type) {
    case ErrorConstants.ADD_ERROR:
      return action.error;
    case ErrorConstants.REMOVE_ERROR:
      return null;
    default:
      return state;
  }
}

export default ErrorReducer;