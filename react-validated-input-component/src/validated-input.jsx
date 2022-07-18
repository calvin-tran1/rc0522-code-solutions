import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { password: '' };
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    let verification;
    let verificationText;

    if (this.state.password.length === 0) {
      verification = 'fa-solid fa-xmark';
      verificationText = 'A password is required.';
    } else if (this.state.password.length < 8) {
      verification = 'fa-solid fa-xmark';
      verificationText = 'Your password is too short.';
    } else if (this.state.password.length >= 8) {
      verification = 'fa-solid fa-check';
      verificationText = '';
    }
    return (
      <>
        <label>
          Password
        </label>
        <br />
        <input type="password" value={this.state.password} onChange={this.handleChange} />
        <span>
          <i className={verification} />
        </span>
        <p>
          {`${verificationText}`}
        </p>
      </>

    );
  }
}
