// hello-with-state.jsx
import React from 'react';

export default class HelloWithState extends React.Component {
  constructor() {
    super();
    this.state = {number: 0};

    // handlers
    this._onClickMe = this._onClickMe.bind(this);
  }

  _onClickMe(evt) {
    this.setState({number: this.state.number + 1});
  }

  render() {
    return (
      <div>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this._onClickMe}>Increment!</button>
      </div>
    );
  }
}
