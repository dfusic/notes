import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

const dummyOnClick = () => {};
const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<Button onClick={dummyOnClick} />, div);
});
