import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    return (
      <div>
        <button className={this.state.isClicked ? 'on' : 'off'} onClick={this.handleClick}>
        </button>
        <span className={this.state.isClicked ? 'slider-on' : 'slider-off'} onClick={this.handleClick}></span>
        <span className='text'>{this.state.isClicked ? 'ON' : 'OFF'}</span>
      </div>
    );
  }
}
