import React, { Component } from "react";

const INITIAL_VALUE = 0;

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: INITIAL_VALUE,
    };
    this.reset = this.reset.bind(this);
  }

  increment = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  reset() {
    this.setState({ value: INITIAL_VALUE });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Value: {this.state.value}</h1>
        <button onClick={this.increment}>Increament</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
