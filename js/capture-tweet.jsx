import React from 'react';

export default class CaptureTweet extends React.Component {

  constructor() {
    super();

    this.state = {text: ""};

    // handlers
    this._send = this._send.bind(this);
    this._change = this._change.bind(this);

  }

  _send(evt) {
    this.props.onSendTweet({key: 0, text: this.state.text, createdAt: Date.now()});
    this.setState({text: ""});
  }

  _change(evt) {
    this.setState({text: evt.target.value});
  }

  _isTextEmpty() {
    return this.state.text == undefined || this.state.text === "";
  }

  render() {
    return (
      <form>
        <textarea name="text" placeholder="What's happening?" value={this.state.text} onChange={this._change} />
        <input type="button" value="Send" onClick={this._send} disabled={this._isTextEmpty()}></input>
      </form>
    );
  }
}
