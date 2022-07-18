import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: '' };
  }

  handleClick(e) {
    const name = e.target.getAttribute('name');

    if (name === this.state.clicked) {
      this.setState({ clicked: '' });
      return;
    }

    this.setState({ clicked: name });
  }

  render() {

    return (
      <ul>
        {this.props.languages.map((lang, index) => {
          return (
            <Language
              key={index}
              name={lang.shorthand}
              language={lang.language}
              description={lang.description}
              onClick={this.handleClick}
              clicked={this.state.clicked}
            />
          );
        })
      }
      </ul>
    );
  }
}

function Language(props) {
  return (
    <li>
      <div name={props.name} className="lang" onClick={props.onClick}>
        {props.language}
      </div>
      <LanguageDescription description={props.description} match={props.name === props.clicked} />
    </li>
  );
}

function LanguageDescription(props) {
  if (props.match) {
    return (
      <div className="lang-description">
        {props.description}
      </div>
    );
  }
}
