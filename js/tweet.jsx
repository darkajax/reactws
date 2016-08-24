import React from 'react';

export default class Tweet extends React.Component {

  _formatDate(dateLong) {

    let date = new Date(dateLong);
    let options = {
      weekday: "short", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    return date.toLocaleDateString("en-us", options);
  }

  render() {
    return (
      <div className="tweet">
        <p>{this.props.text}</p>
        <span className="date">on {this._formatDate(this.props.createdAt)}</span>
      </div>
    );
  }
}
