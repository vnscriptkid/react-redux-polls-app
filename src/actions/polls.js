import { savePoll } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";

export const receivePollsAction = polls => ({
  type: RECEIVE_POLLS,
  polls
});

export const addPollAction = poll => ({
  type: ADD_POLL,
  poll
});

export const handleAddPollAction = poll => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    savePoll({ ...poll, author: authedUser })
      .then(poll => dispatch(addPollAction(poll)))
      .then(() => dispatch(hideLoading()));
  };
};
