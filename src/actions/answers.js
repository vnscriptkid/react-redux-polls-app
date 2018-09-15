import { savePollAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const ADD_ANSWER = "ADD_ANSWER";
export const addAnswerAction = ({ id, answer, authedUser }) => ({
  type: ADD_ANSWER,
  id,
  answer,
  authedUser
});

export const handleAddAnswerAction = answerData => {
  return dispatch => {
    dispatch(showLoading());
    // debugger;
    savePollAnswer(answerData)
      .then(() => dispatch(addAnswerAction(answerData)))
      .then(() => dispatch(hideLoading()));
  };
};
