import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Leaderboard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    const { users } = this.props;
    return (
      <ul style={{ listStyle: "none" }}>
        {users.map(({ id, name, avatarURL, polls, answers }) => (
          <li key={id}>
            <img
              style={{
                height: 100,
                width: 100,
                float: "left",
                marginRight: 10
              }}
              src={avatarURL}
              alt={name}
            />

            <h3>{name}</h3>
            <p>{polls} Polls</p>
            <p>{answers} Answers</p>
            <hr />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  const userArr = Object.keys(users)
    .map(key => users[key])
    .map(({ name, id, avatarURL, polls, answers }) => ({
      id,
      name,
      avatarURL,
      polls: polls.length,
      answers: answers.length
    }))
    .sort((a, b) => b.polls + b.answers > a.polls + a.answers);
  return {
    users: userArr
  };
};

export default connect(mapStateToProps)(Leaderboard);
