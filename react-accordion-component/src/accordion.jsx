import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { lang: '' };
  }

  handleClick(e) {
    this.setState({ lang: e.target.getAttribute('name') });
  }

  render() {

    return (
      <ul>
        {this.props.languages.map(lang => {
          return (
          <li key={lang.shorthand}>
            <div name={lang.shorthand} className="lang" onClick={this.handleClick}>
              {lang.language}
            </div>
            <LanguageDescription description={lang.description} />
          </li>
          );
        })
      }
      </ul>
    );
  }
}

function LanguageDescription(props) {
  return (
    <div name={props.shorthand} className="lang-description">
      {props.description}
    </div>
  );
}
