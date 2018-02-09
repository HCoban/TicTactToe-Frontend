import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import RootReducer from "../reducers/index";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const configureStore = preloadedState => {
  return createStoreWithMiddleware(RootReducer, preloadedState);
};

export default configureStore;
