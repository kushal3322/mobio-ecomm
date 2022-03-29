import { combineReducers } from "redux";

import authReducer from "./Auth/auth";

const allReducers = combineReducers({
  authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
