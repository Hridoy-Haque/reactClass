import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  onChangeIncreament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onChangeDecreament = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <h1>Count : {count}</h1>
        <button type="button" onClick={this.onChangeIncreament}>
          +
        </button>
        <button
          type="button"
          onClick={this.onChangeDecreament}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
