import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const languages = [
  {
    language: 'Hypertext Markup Language',
    shorthand: 'html',
    description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/ presentation(CSS) or functionality / behavior(JavaScript)."
  },
  {
    language: 'Cascading Style Sheets',
    shorthand: 'css',
    description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.'
  },
  {
    language: 'JavaScript',
    shorthand: 'js',
    description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<Accordion languages={languages} />);
