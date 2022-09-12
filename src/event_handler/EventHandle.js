import React, { Component } from "react";

export default class EventHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  valueChange = (e) => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        console.log(this.state.value); // change er sathe sathe kono kaj korte chaile :)
      }
    );
  };
  clearValue = () => {
    this.setState({
      value: "",
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input type="text" onChange={this.valueChange} value={value} />
        <button className="btnClass" onClick={this.clearValue} type="button">
          clear
        </button>
        <p>{value}</p>
      </div>
    );
  }
}
