import React from 'react';
import CaptureTweet from './capture-tweet.jsx';
import Tweet from './tweet.jsx';

export default class TweetList extends React.Component {
  constructor() {
    super();
    this.state = {currentKey: 1, tweets: []};

    // handlers
    this._sendTweet = this._sendTweet.bind(this);
  }

  _sendTweet(tweet) {
    tweet.key = this.state.currentKey;
    this.setState({
        currentKey: this.state.currentKey + 1,
        tweets: this.state.tweets.concat(tweet)
    });
  }

  render() {
    return (
      <div>
        <CaptureTweet onSendTweet={this._sendTweet}/>
        <div className="tweet-list">
          {this.state.tweets.map(tweet =>
            <Tweet key={tweet.key} text={tweet.text} createdAt={tweet.createdAt}/>
          )}
        </div>
      </div>
    );
  }
}
