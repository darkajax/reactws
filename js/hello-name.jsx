// hello-with-state.jsx
import React from 'react';

export default class HelloName extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
