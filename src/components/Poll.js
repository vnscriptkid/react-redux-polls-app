import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswerAction } from "../actions/answers";

export class Poll extends Component {
  generateInfo = (count, total) => {
    return `${(count / total) * 100}% (${count})`;
  };

  handlePickAnswer = answer => {
    console.log(answer);
    const { authedUser, poll, dispatch } = this.props;
    dispatch(
      handleAddAnswerAction({
        authedUser,
        answer,
        id: poll.id
      })
    );
  };

  render() {
    const { poll, authedUser, vote, users } = this.props;
    const { avatarURL, name } = users[authedUser];
    const { question } = poll;
    const totalVotes = answersKey().reduce(
      (acc, key) => acc + poll[key].length,
      0
    );
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{question}</h2>
        <h3 style={{ textAlign: "center" }}>
          BY{" "}
          <img
            src={avatarURL}
            alt={name}
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              verticalAlign: "center"
            }}
          />
        </h3>
        <ul style={{ listStyle: "none" }}>
          {keyText().map(key => {
            const count = poll[`${key[0]}Votes`].length;
            return (
              <li
                key={key}
                style={{
                  padding: 20,
                  border:
                    key[0] === vote ? "2px solid red" : "2px dotted black",
                  marginBottom: 5
                }}
                onClick={() => {
                  if (!vote) {
                    this.handlePickAnswer(key[0]);
                  }
                }}
              >
                {poll[key]}
                <strong style={{ float: "right" }}>
                  {this.generateInfo(count, totalVotes)}
                </strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const answersKey = () => ["aVotes", "bVotes", "cVotes", "dVotes"];
const keyText = () => ["aText", "bText", "cText", "dText"];

const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null
    };
  }

  const vote = answersKey().reduce((acc, currentValue) => {
    if (poll[currentValue].indexOf(authedUser) !== -1) {
      return currentValue[0];
    } else {
      return acc;
    }
  }, null);

  //   debugger;

  return {
    vote,
    poll,
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(Poll);
