import { RECEIVE_USERS } from "../actions/users";
import { ADD_POLL } from "../actions/polls";
import { ADD_ANSWER } from "../actions/answers";

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_POLL:
      const { author } = action.poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([action.poll.id])
        }
      };
    case ADD_ANSWER:
      const { id, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: state[authedUser]["answers"].concat([id])
        }
      };
    default:
      return state;
  }
}
