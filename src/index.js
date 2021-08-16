import React from 'react';
import react_dom from "react-dom";

const { render } = react_dom;

const root = document.querySelector('#root');

render(<h1>React</h1>, root)
