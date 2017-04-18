const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');

const Nav = require('./components/Nav');
const ProfileBox = require('./components/ProfileBox');
const TrendsBox = require('./components/TrendsBox');
const Tweetfeed = require('./components/Tweetfeed');

const App = React.createClass({
  getInitialState: function () {
    return {
      trends: [],
      tweets: [],
      user: {}
    };
  },
  componentWillMount: function () {
    this.getTweets();
    this.getUserData();
    request
      .get('https://protected-oasis-31937.herokuapp.com/trends')
      .end(function (error, response) {
        if (error) console.log(error);
        this.setState({
          trends: response.body.tweetData.trends[0].trends
        });
      }.bind(this));
  },
  getUserData: function () {
    request
      .get('https://protected-oasis-31937.herokuapp.com/tweets/northcoders')
      .end(function (error, response) {
        if (error) console.log(error);
        let user = response.body.tweetData[0].user;
        this.setState({
          user: {
            tweets: user.statuses_count,
            followers: user.followers_count,
            following: user.friends_count,
            profileImg: user.profile_image_url,
            profileBanner: user.profile_banner_url,
            name: user.name,
            handle: user.screen_name
          }
        });
      }.bind(this));
  },
  getTweets: function () {
    request
      .get('https://protected-oasis-31937.herokuapp.com/tweets')
      .end(function (error, response) {
        if (error) console.log(error);
        let data = response.body;
        let tweetInfo = data.reduce(function (tweetData, user, i) {
          if (!Array.isArray(user.tweets)) {
            return tweetData;
          }
          user.tweets.forEach(function (tweet) {
            tweetData.push(tweet);
          });
          return tweetData;
        }, []);
        this.setState({
          tweets: tweetInfo
        });
      }.bind(this));
  },
  render: function () {
    console.log('state', this.state);
    return (
      <div>
        <Nav />
        <div className='columns main-content container max-container'>
          <div className='column is-3'>
            <ProfileBox user={this.state.user} />
            <TrendsBox trends={this.state.trends} />
          </div>
          <div className='column is-6'>
            <Tweetfeed tweets={this.state.tweets} />
          </div>
          <div className='column is-3'>
            <ProfileBox user={this.state.user} />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
