import React from "react";

class SignUp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // Error check

    console.log('submitted');
  }

  render() {

    const tempStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    const inputData = [
      { key: 1, label: 'Email Address', name: 'email', type: 'text', error: 'emailError' },
      { key: 2, label: 'Password', name: 'password', type: 'text', error: 'passwordError' },
      { key: 3, label: 'Confirm Password', name: 'confirmPass', type: 'text', error: 'passwordError' },
      { key: 4, label: 'First Name', name: 'firstName', type: 'text', error: 'nameError' },
      { key: 5, label: 'Last Name', name: 'lastName', type: 'text', error: 'nameError' },
    ]

    return (
      <div>
        <div>Sign Up</div>
        <form style={tempStyle} onSubmit={this.handleSubmit}>
          {inputData.length ? inputData.map((item) => (
            <input
              key={item.key}
              autoComplete="off"
              placeholder={item.label}
              type={item.type}
              name={item.name}
            />
          )) : null}
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUp;