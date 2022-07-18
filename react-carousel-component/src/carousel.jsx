import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { index: 0 };
  }

  nextImage() {
    if (this.state.index === this.props.images.length - 1) {
      this.setState({ index: 0 });
      return;
    }
    this.setState({ index: this.state.index + 1 });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.nextImage(), 3000);
  }

  handleClick(e) {

    // dot indicators
    if (e.target.type === 'button') {
      const dataId = +e.target.getAttribute('data-id');
      this.setState({ index: dataId });
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    }

    // previous image
    if (e.target.getAttribute('class') === 'fa-solid fa-angle-left') {
      if (this.state.index === 0) {
        this.setState({ index: this.props.images.length - 1 });
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => this.nextImage(), 3000);
        return;
      }
      this.setState({ index: this.state.index - 1 });
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    }

    // next image
    if (e.target.getAttribute('class') === 'fa-solid fa-angle-right') {
      this.nextImage();
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.nextImage(), 3000);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="img-container">
          <i className="fa-solid fa-angle-left" onClick={this.handleClick} />
          {this.props.images.map((image, index) => {
            return (
              <RenderImg
                key={index}
                url={image.url}
                index={this.state.index === image.id}
              />
            );
          })}
          <i className="fa-solid fa-angle-right" onClick={this.handleClick} />
        </div>
        <div className="dot-container">
          {this.props.images.map((image, index) => {
            return (
              <RenderDots
                key={index}
                fill={this.state.index === image.id ? 'filled' : 'unfilled'}
                dataId={image.id}
                onClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function RenderImg(props) {
  if (props.index) {
    return (
      <img src={props.url} />
    );
  }
}

function RenderDots(props) {
  return (
    <button type="button" className={props.fill} data-id={props.dataId} onClick={props.onClick} />
  );
}
