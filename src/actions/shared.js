import { getInitialData } from "../utils/api";
import { receivePollsAction } from "./polls";
import { receiveUsersAction } from "./users";
import { setAuthedUserAction } from "./authedUser";
import { hideLoading, showLoading } from "react-redux-loading";

const AUTHED_ID = "tylermcginnis";

export function handleInitialDataAction() {
  return function(dispatch) {
    dispatch(showLoading());
    getInitialData().then(({ users, polls }) => {
      dispatch(receivePollsAction(polls));
      dispatch(receiveUsersAction(users));
      dispatch(setAuthedUserAction(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
