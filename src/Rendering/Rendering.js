import { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }

  render() {
    // if (this.state.isLogedIn) {
    //   return <HomePage />;
    // } else {
    //   return <LoginPage />;
    // }
    const { isLogedIn } = this.state;
    let element = isLogedIn ? <HomePage /> : <LoginPage />;
    // let element;
    // if (isLogedIn) {
    //   element = <HomePage />;
    // } else {
    //   element = <LoginPage />;
    // }
    return <div>{element}</div>;
  }
}
