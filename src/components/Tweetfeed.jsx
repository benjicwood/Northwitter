const React = require('react');
const moment = require('moment');

const Tweet = require('./Tweet');

const Tweetfeed = React.createClass({
  renderTweets: function () {
    return this.props.tweets.map(function (tweet, i) {
      const {text, created_at, id_str} = tweet;
      const {name, screen_name, profile_image_url} = tweet.user;
      return <Tweet
        key={id_str + i}
        tweet={{name, created_at: this.convertTime(created_at), text, screen_name, profile_image_url}}
      />;
    }.bind(this))
    .sort(function (a, b) {
      return b.props.tweet.created_at - a.props.tweet.created_at;
    });
  },
  convertTime: function (tweetCreated) {
    return moment(new Date(tweetCreated));
  },
  render: function () {
    return (
      <div className='box'>
        {this.renderTweets()}
      </div>
    );
  }
});

module.exports = Tweetfeed;
