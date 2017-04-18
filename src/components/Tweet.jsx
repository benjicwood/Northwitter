const React = require('react');
const moment = require('moment');

const Link = require('./Link');

const Tweet = React.createClass({
  getInitialState: function () {
    return {
      createdAt: this.props.tweet.created_at
    };
  },
  displayTweetTime: function (tweetDate) {
    var now = moment(new Date());
    var duration = moment.duration(now.diff(tweetDate));
    if (duration.asSeconds() < 60) {
      return Math.floor(duration.asSeconds()) + 's';
    }
    if (duration.asMinutes() < 60) {
      return Math.floor(duration.asMinutes()) + 'm';
    }
    if (duration.asHours() < 24) {
      return Math.floor(duration.asHours()) + 'h';
    }
    if (tweetDate.year() === now.year()) {
      return tweetDate.format('MMM D');
    }
    return tweetDate.format('D MMM YYYY');
  },
  render: function () {
    const {name, profile_image_url, screen_name, text} = this.props.tweet;
    const createdAt = this.state.createdAt;
    return (
      <article className='media'>
        <figure className='media-left'>
          <p className='image is-48x48'>
            <Link url={`https://twitter.com/${screen_name}`}>
              <img className='rounded' src={profile_image_url} />
            </Link>
          </p>
        </figure>
        <div className='media-content'>
          <div className='content'>
            <p>
              <Link url={`https://twitter.com/${screen_name}`}>
                <strong>{name} </strong>
              </Link>
              <small>{'@' + screen_name}</small> <small>{this.displayTweetTime(createdAt)}</small>
              <br />
              {text}
            </p>
          </div>
          <nav className='level'>
            <div className='level-left'>
              <a className='level-item'>
                <span className='icon is-small'><i className='fa fa-reply' /></span>
              </a>
              <a className='level-item'>
                <span className='icon is-small'><i className='fa fa-retweet' /></span>
              </a>
              <a className='level-item'>
                <span className='icon is-small'><i className='fa fa-heart' /></span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    );
  }
});

module.exports = Tweet;
