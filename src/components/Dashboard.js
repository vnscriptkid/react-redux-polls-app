import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Dashboard extends Component {
  state = {
    showAnswered: true
  };

  showAnswered = () => {
    this.setState({ showAnswered: true });
  };

  showUnanswered = () => {
    this.setState({ showAnswered: false });
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const list = showAnswered ? answered : unanswered;
    return (
      <div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          <span
            onClick={this.showAnswered}
            style={{ textDecoration: showAnswered ? "underline" : "none" }}
          >
            Answered
          </span>
          <span
            onClick={this.showUnanswered}
            style={{ textDecoration: showAnswered ? "none" : "underline" }}
          >
            Unanswered
          </span>
        </h2>

        <ul>
          {list.map(poll => (
            <li key={poll.id}>
              <Link to={`/poll/${poll.id}`}>{poll.question}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, polls }) => {
  const answers = users[authedUser].answers;

  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    authedUser,
    answered,
    unanswered
  };
};

export default connect(mapStateToProps)(Dashboard);
