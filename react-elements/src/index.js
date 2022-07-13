import React from 'react';
import * as ReactDOM from 'react-dom';

const helloReact = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log(helloReact);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(helloReact);
