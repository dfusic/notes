import React from 'react';
import ReactDOM from 'react-dom';
import Flexbox from './index';

const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<Flexbox />, div);
});
