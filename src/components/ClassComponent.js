import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { message: "Hello World" };
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    this.setState({ message: "Hello World Clicked" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.buttonPress}>Click me!</button>
      </div>
    );
  }
}

export default ClassComponent;
