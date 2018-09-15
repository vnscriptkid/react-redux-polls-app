import React, { Component, Fragment } from "react";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialDataAction } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";
import Nav from "./Nav";
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialDataAction());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Nav />
          {authedUser ? (
            <Fragment>
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/add" component={AddPoll} />
              <Route path="/poll/:id" component={Poll} />
            </Fragment>
          ) : (
            <h1>Loading...</h1>
          )}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authedUser: state.authedUser
});

export default connect(mapStateToProps)(App);
