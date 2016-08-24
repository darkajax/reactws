import React from 'react';

export default class CaptureTweet extends React.Component {

  constructor() {
    super();
  }

  _send(evt) {
  }

  _change(evt) {
  }

  _isTextEmpty() {
    return this.state.text == undefined || this.state.text === "";
  }

  render() {
    return (
      <form className="capture-tweet">
      </form>
    );
  }
}
