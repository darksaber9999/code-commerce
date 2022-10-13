import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


class Login extends React.Component {

  signInSuccess = (user) => {
    this.props.toggleIsLoggedIn();
    this.props.setLoggedInUser(user);
    this.props.goToCart();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add Error check

    this.props.info.currentUsers.map((user) => {
      if (user.emailAddress === e.target[0].value && user.password === e.target[1].value) {
        this.signInSuccess(user);
        return true;
      }
      if (user.emailAddress === e.target[0].value && user.password !== e.target[1].value) {
        // Add incorrect password error
        console.log('Incorrect Password');
        return false;
      }
      return false;
    });
  }

  render() {
    const inputData = [
      { key: 1, id: 'emailAddress', label: 'Email Address', name: 'email', type: 'text', error: 'emailError' },
      { key: 2, id: 'password', label: 'Password', name: 'password', type: 'password', error: 'passwordError' },
    ]

    const passwordMask = () => {
      const currentFieldType = document.getElementById('password').type;
      const newType = (currentFieldType === 'password') ? 'text' : 'password';
      document.getElementById('password').type = newType;
    }


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {inputData.length ? inputData.map((item) => (
            <input
              key={item.key}
              id={item.id}
              autoComplete="off"
              placeholder={item.label}
              type={item.type}
              name={item.name}
            />
          )) : null}
          <FontAwesomeIcon icon={faEye} onClick={passwordMask} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;