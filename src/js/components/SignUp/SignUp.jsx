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
      { label: 'Email Address', name: 'email', type: 'text', error: 'emailError' },
      { label: 'Password', name: 'password', type: 'text', error: 'passwordError' },
      { label: 'Confirm Password', name: 'confirmPass', type: 'text', error: 'passwordError' },
      { label: 'First Name', name: 'firstName', type: 'text', error: 'nameError' },
      { label: 'Last Name', name: 'lastName', type: 'text', error: 'nameError' },
    ]

    return (
      <div>
        <div>Sign Up</div>
        <form style={tempStyle} onSubmit={this.handleSubmit}>
          {inputData.length ? inputData.map((item) => (
            <input
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