// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world.jsx';
import HelloName from './hello-name.jsx';
import HelloListener from './hello-listener.jsx';
import HelloWithState from './hello-with-state.jsx';

ReactDOM.render(
  <div>
    <HelloWorld />
    <HelloName name="Daniel"/>
    <HelloListener name="fucker"/>
    <HelloWithState name="Daniel" />
  </div>,
  document.getElementById("content")
);
