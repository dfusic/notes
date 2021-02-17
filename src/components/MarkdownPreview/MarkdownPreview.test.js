import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreview from './index';

const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<MarkdownPreview />, div);
});
