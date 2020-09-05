import React, { Component } from "react";
import { fetchData } from "./service";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      data: null,
      isLoading: true,
    };
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true });
    const data = await fetchData(this.state.id);
    this.setState({ data }, () =>
      this.setState({ isLoading: false, id: null })
    );
  };

  render() {
    let show = (
      <div>
        {this.state.data ? (
          this.state.isLoading ? (
            "loading..."
          ) : (
            <div>{this.state.data.title} </div>
          )
        ) : null}
      </div>
    );
    return (
      <div>
        <input
          type="text"
          value={this.state.id}
          onChange={(e) => this.setState({ id: e.target.value })}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {show}
      </div>
    );
  }
}
