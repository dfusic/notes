import React from 'react';
import ReactDOM from 'react-dom';
import NewNoteButton from './index';

const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<NewNoteButton onClick={() => {}} />, div);
});
