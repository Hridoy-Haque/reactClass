import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this); // binding
    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button className="btnClass" type="button" onClick={this.increaseCount}>
          increase
        </button>
      </div>
    );
  }
}
