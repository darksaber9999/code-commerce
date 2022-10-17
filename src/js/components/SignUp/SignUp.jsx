import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { INIT_USER_CARD } from "../initialState";
import { checkForDuplicateUser, onlyNumbersValidation, onlyTextValidation, passwordMatchValidation } from "../validations";
import s from "./SignUp.module.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpData: INIT_USER_CARD,
      error: {},
    }
  }

  handleValidations = (type, value) => {
    let errorText;
    switch (type) {
      case 'emailAddress':
        errorText = checkForDuplicateUser(value, this.props.info.currentUsers);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      case 'password':
        errorText = passwordMatchValidation(value, this.state.signUpData.passwordConfirm);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      case 'passwordConfirm':
        errorText = passwordMatchValidation(value, this.state.signUpData.password);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type.replace('Confirm', '')}Error`]: errorText,
          },
        }));
        break;
      case 'firstName':
      case 'lastName':
        errorText = onlyTextValidation(value);
        this.setState((prevState) => ({
          error: {
            ...prevState.error,
            [`${type}Error`]: errorText,
          },
        }));
        break;
      case 'postalCode':
        errorText = onlyNumbersValidation(value);
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

  handleChange = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      signUpData: {
        ...prevState.signUpData,
        [name]: value
      },
    }));
  }

  checkErrorBeforeSave = () => {
    const { signUpData } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(signUpData).forEach((val) => {
      if (!signUpData[val].length && val !== 'cart') {
        errorValue = { ...errorValue, [`${val.replace('Confirm', '')}Error`]: 'Required' };
        isError = true;
      }
    });
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
    const errorCheck = this.checkErrorBeforeSave();

    if (!errorCheck && !Object.values(this.state.error).filter((val) => val !== undefined).length) {
      this.props.addUser(this.state.signUpData);
      this.setState({
        signUpData: INIT_USER_CARD,
      });
      this.props.swapAuthOption();
    }
  }

  render() {
    const { error } = this.state;

    const inputData = [
      { key: 1, id: 'emailAddress', label: 'Email Address', name: 'emailAddress', type: 'email', error: 'emailAddressError' },
      { key: 2, id: 'password', label: 'Password', name: 'password', type: 'password', error: 'passwordError' },
      { key: 3, id: 'passwordConfirm', label: 'Confirm Password', name: 'passwordConfirm', type: 'password', error: 'passwordError' },
      { key: 4, id: 'firstName', label: 'First Name', name: 'firstName', type: 'text', error: 'firstNameError' },
      { key: 5, id: 'lastName', label: 'Last Name', name: 'lastName', type: 'text', error: 'lastNameError' },
      { key: 6, id: 'postalCode', label: 'Postal Code', name: 'postalCode', type: 'text', error: 'postalCodeError', maxLength: 5 },
    ]

    const passwordMask = () => {
      const currentFieldType = document.getElementById('password').type;
      const newType = (currentFieldType === 'password') ? 'text' : 'password';
      document.getElementById('password').type = newType;
      document.getElementById('passwordConfirm').type = newType;
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
                value={this.state.signUpData && this.state.signUpData[item.name]}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                maxLength={item.maxLength ? item.maxLength : null}
              />
              <div className="error-message">
                {(error
                  && error[item.error]
                  && error[item.error].length > 1)
                  ? error[item.error]
                  : null}
              </div>
              {item.id === 'password' ? (
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={passwordMask}
                  className={s.passwordEyeIcon}
                />
              ) : null}
            </label>
          )) : null}
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUp;