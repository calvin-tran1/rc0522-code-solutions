import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click me!</button>;
}

const $btn = <CustomButton />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render($btn);
