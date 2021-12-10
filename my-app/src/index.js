import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './components/card';
import { SocialIcon } from 'react-social-icons';

{/*ReactDOM.render(<Triangles />, document.getElementById("triangle"));*/}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('canvas'),
);
ReactDOM.render(
    <Card />,
  document.getElementById('card'),
);