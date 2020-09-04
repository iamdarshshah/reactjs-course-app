import React, { Component } from "react";
import { Increament, Decrement, Reset } from "./functions"; // Importing - Named exports

const INITIAL_VALUE = 0;

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: INITIAL_VALUE,
    };
  }

  handleChange = (func, value) => {
    let newValue = func(value);
    console.log(newValue);
    this.setState({ value: newValue });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Value: {this.state.value}</h1>
        <button onClick={() => this.handleChange(Increament, this.state.value)}>
          Increament
        </button>
        <button onClick={() => this.handleChange(Decrement, this.state.value)}>
          Decrement
        </button>
        <button onClick={() => this.handleChange(Reset, INITIAL_VALUE)}>
          Reset
        </button>
      </div>
    );
  }
}
