import React, { Component } from "react";

export default class UseState1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>count : {count}</h1>
        <button className="btnClass" onClick={this.increaseCount}>
          Increament
        </button>
      </div>
    );
  }
}
