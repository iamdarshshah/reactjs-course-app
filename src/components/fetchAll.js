import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
        this.setState({ data: res.data }, () =>
          this.setState({ isLoading: false })
        )
      );
  }

  render() {
    let show = (
      <div>
        {this.state.isLoading ? (
          "loading..."
        ) : (
          <div>
            <ul>
              {this.state.data.map((each, i) => (
                <li key={i}>{each.title}</li>
              ))}{" "}
            </ul>
          </div>
        )}
      </div>
    );
    return <div>{show}</div>;
  }
}
