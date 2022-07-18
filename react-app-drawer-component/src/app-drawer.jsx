import React from 'react';

export default class AppDrawer extends React.Component {
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
      <>
        <button className={this.state.isClicked ? 'hidden' : ''} onClick={this.handleClick}>
          <i className="fa-solid fa-bars" />
        </button>
        <div className={this.state.isClicked ? 'overlay' : 'hidden'} onClick={this.handleClick} />
        <nav>
          <ul className={this.state.isClicked ? 'nav-menu' : 'nav-menu hidden'}>
            <li className="menu">
              Menu
            </li>
            <li className="nav-link" onClick={this.handleClick}>
              <a href="#">About</a>
            </li>
            <li className="nav-link" onClick={this.handleClick}>
              <a href="#">Get Started</a>
            </li>
            <li className="nav-link" onClick={this.handleClick}>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
