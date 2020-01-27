import React from 'react';
import ReactDOM from 'react-dom';
import App from './MylomTestApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MylomTestApp />, div);
});