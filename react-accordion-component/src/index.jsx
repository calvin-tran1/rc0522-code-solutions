import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const languages = [
  { language: 'Hypertext Markup Language', shorthand: 'html', description: 'test1' },
  { language: 'Cascading Style Sheets', shorthand: 2, description: 'test2' },
  { language: 'JavaScript', shorthand: 3, description: 'test3' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<Accordion languages={languages} />);
