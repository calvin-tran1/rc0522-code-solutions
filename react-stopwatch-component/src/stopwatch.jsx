import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { isClicked: false, count: 0 };
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  playPause() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));

    if (this.state.isClicked === false) {
      this.intervalId = setInterval(() => this.tick(), 1000);
    }

    if (this.state.isClicked === true) {
      clearInterval(this.intervalId);
    }
  }

  reset() {
    if (this.state.isClicked === false) {
      this.setState({ count: 0 });
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <button className="watch" onClick={this.reset}>
          {this.state.count}
        </button>
        <button className="play-pause-btn" onClick={this.playPause}>
          <i className={this.state.isClicked ? 'fa-solid fa-pause' : 'fa-solid fa-play'}></i>
        </button>
      </div>
    );
  }
}
