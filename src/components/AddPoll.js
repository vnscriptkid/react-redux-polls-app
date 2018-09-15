import React, { Component } from "react";
import { handleAddPollAction } from "../actions/polls";
import { connect } from "react-redux";

export class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };

  handleChangeInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleAddPollAction(this.state));
    this.setState({
      question: "",
      a: "",
      b: "",
      c: "",
      d: ""
    });
  };

  isDisable = () => {
    const { question, a, b, c, d } = this.state;
    return question === "" || a === "" || b === "" || c === "" || d === "";
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Add Poll</h2>
        <form onSubmit={this.handleFormSubmit}>
          <h3>Type the question here</h3>
          <div>
            <label htmlFor="question">Question: </label>
            <input
              type="text"
              name="question"
              value={question}
              onChange={this.handleChangeInput}
            />
          </div>

          <h3>Now type 4 answers here</h3>
          <div>
            <label htmlFor="a">A. </label>
            <input
              type="text"
              name="a"
              value={a}
              onChange={this.handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="b">B. </label>
            <input
              type="text"
              name="b"
              value={b}
              onChange={this.handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="c">C. </label>
            <input
              type="text"
              name="c"
              value={c}
              onChange={this.handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="d">D. </label>
            <input
              type="text"
              name="d"
              value={d}
              onChange={this.handleChangeInput}
            />
          </div>

          <input
            disabled={this.isDisable()}
            type="submit"
            value="ADD QUESTION"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddPoll);
