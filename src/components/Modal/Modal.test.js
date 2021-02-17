import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<Modal />, div);
});
