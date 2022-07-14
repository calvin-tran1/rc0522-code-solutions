import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clickCount: 0 };
  }

  handleClick() {
    this.setState(prevState => {
      return { clickCount: prevState.clickCount + 1 };
    });
  }

  render() {
    let btnColor;

    if (this.state.clickCount >= 0) {
      btnColor = 'btn-grey';
    }

    if (this.state.clickCount >= 3) {
      btnColor = 'btn-purple';
    }

    if (this.state.clickCount >= 6) {
      btnColor = 'btn-red';
    }

    if (this.state.clickCount >= 9) {
      btnColor = 'btn-pink';
    }

    if (this.state.clickCount >= 12) {
      btnColor = 'btn-orange';
    }

    if (this.state.clickCount >= 15) {
      btnColor = 'btn-yellow';
    }

    if (this.state.clickCount >= 18) {
      btnColor = 'btn-white';
    }

    return (
      <button className={`${btnColor}`} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}
