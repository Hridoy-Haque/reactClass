import React, { Component } from "react";
import { FaAlipay } from "react-icons/fa";

class Card2 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.desc}</p>
        <FaAlipay />
      </div>
    );
  }
}

export default Card2;
