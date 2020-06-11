import { LOAD_MOVIES_DATA } from "../actions/actionType";
import initialState from "../initialState";

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES_DATA:
      return action.payload;

    default:
      return state;
  }
};
export default moviesReducer;
