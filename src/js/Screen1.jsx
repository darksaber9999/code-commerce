import React from "react";

class Screen1 extends React.Component {
  render() {
    return (
      <div>
        <div>Screen 1</div>
        <button onClick={this.handleButton}>Click me</button>
      </div>
    )
  }
}

export default Screen1;