import { combineReducers } from "redux";
import pollsReducer from "./polls";
import usersReducer from "./users";
import authedUserReducer from "./authedUser";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users: usersReducer,
  polls: pollsReducer,
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer
});
