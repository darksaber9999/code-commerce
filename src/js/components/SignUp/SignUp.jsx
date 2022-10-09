import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { INIT_USER_CARD } from "../initialState";

class SignUp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // Error check

    const newUser = {
      emailAddress: e.target[0].value,
      password: e.target[1].value,
      firstName: e.target[3].value,
      lastName: e.target[4].value,
      postalCode: e.target[5].value,
      cart: new Map(),
    }

    this.props.addUser(newUser);
    e.target[0].value = INIT_USER_CARD.emailAddress;
    e.target[1].value = INIT_USER_CARD.password;
    e.target[2].value = INIT_USER_CARD.passwordConfirm;
    e.target[3].value = INIT_USER_CARD.firstName;
    e.target[4].value = INIT_USER_CARD.lastName;
    e.target[5].value = INIT_USER_CARD.postalCode;
    this.props.swapAuthOption();
  }

  render() {

    const tempStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    const inputData = [
      { key: 1, id: 'emailAddress', label: 'Email Address', name: 'email', type: 'text', error: 'emailError' },
      { key: 2, id: 'password', label: 'Password', name: 'password', type: 'password', error: 'passwordError' },
      { key: 3, id: 'passwordConfirm', label: 'Confirm Password', name: 'confirmPass', type: 'password', error: 'passwordError' },
      { key: 4, id: 'firstName', label: 'First Name', name: 'firstName', type: 'text', error: 'nameError' },
      { key: 5, id: 'lastName', label: 'Last Name', name: 'lastName', type: 'text', error: 'nameError' },
      { key: 6, id: 'postalCode', label: 'Postal Code', name: 'postalCode', type: 'number', error: 'postalCodeError' },
    ]

    const passwordMask = () => {
      const currentFieldType = document.getElementById('password').type;
      const newType = (currentFieldType === 'password') ? 'text' : 'password';
      document.getElementById('password').type = newType;
      document.getElementById('passwordConfirm').type = newType;
    }


    return (
      <div>
        <form style={tempStyle} onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUp;