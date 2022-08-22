import React from "react";

class Login extends React.Component {
  toggleDisplay = () => this.props.toggleDisplay('login');

  render() {
    return (
      <div>
        <div>Login</div>
        <button onClick={this.toggleDisplay}>Click me</button>
      </div>
    )
  }
}

export default Login;