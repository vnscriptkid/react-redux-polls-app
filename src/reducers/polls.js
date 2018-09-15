import { RECEIVE_POLLS, ADD_POLL } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers";

export default function pollsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll
      };
    case ADD_ANSWER:
      const { id, answer, authedUser } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer + "Votes"]: state[id][answer + "Votes"].concat([authedUser])
        }
      };
    default:
      return state;
  }
}
