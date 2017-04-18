const React = require('react');

const Trend = require('./Trend');

const TrendsBox = React.createClass({
  render: function () {
    return (
      <div className='box'>
        <div>
          <h2 className='title is-5'>Trends</h2>
        </div>
        {this.renderTrendsList()}
      </div>
    );
  },
  renderTrendsList: function () {
    return (
      <ul className='trends-list'>
        {this.props.trends.slice(0, 10).map(function (trend, i) {
          return <Trend key={i} trend={trend} />;
        })}
      </ul>
    );
  }
});

module.exports = TrendsBox;
