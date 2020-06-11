import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import moviesReducer from "./reducers/moviesReducer";

export const configureStore = (initialState) => {
  return createStore(
    moviesReducer,
    initialState,
    compose(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
};
