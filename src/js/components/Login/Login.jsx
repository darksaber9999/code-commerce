import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {},
    }
  }

  signInSuccess = (user) => {
    this.props.toggleIsLoggedIn();
    this.props.setLoggedInUser(user);
    this.props.goToCart();
  }

  handleValidations = (type, value) => {
    let errorText;
    switch (type) {
      case 'emailAddress':
      case 'password':
        errorText = undefined;
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      default:
        break;
    }
  }

  handleBlur = ({ target: { name, value } }) => this.handleValidations(name, value);

  checkErrorBeforeSave = (email, password) => {
    let errorValue = {};
    let isError = false;
    if (!email.length) {
      errorValue = { ...errorValue, emailAddressError: 'Required' };
      isError = true;
    }
    if (!password.length) {
      errorValue = { ...errorValue, passwordError: 'Required' };
      isError = true;
    }
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        ...errorValue,
      }
    }));
    return isError;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave(e.target[0].value, e.target[1].value);

    if (!errorCheck && !Object.values(this.state.error).filter((val) => val !== undefined).length) {
      this.props.info.currentUsers.map((user) => {
        if (user.emailAddress === e.target[0].value && user.password === e.target[1].value) {
          this.signInSuccess(user);
          return true;
        }
        if (user.emailAddress === e.target[0].value && user.password !== e.target[1].value) {
          this.setState((prevState) => ({
            error: {
              ...prevState.error,
              passwordError: 'Incorrect Password',
            },
          }));
          return false;
        }
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            emailAddressError: 'Email Address not found',
          },
        }));
        return false;
      });
    }
  }

  render() {
    const { error } = this.state;

    const inputData = [
      { key: 1, id: 'emailAddress', label: 'Email Address', name: 'emailAddress', type: 'text', error: 'emailAddressError' },
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
            <label
              key={item.key}
              htmlFor={item.id}
            >
              <input
                id={item.id}
                autoComplete="off"
                placeholder={item.label}
                type={item.type}
                name={item.name}
                onBlur={this.handleBlur}
              />
              <div className="error-message">
                {(error
                  && error[item.error]
                  && error[item.error].length > 1)
                  ? error[item.error]
                  : null}
              </div>
            </label>
          )) : null}
          <FontAwesomeIcon icon={faEye} onClick={passwordMask} />
          <button>Login with Facebook</button>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login;