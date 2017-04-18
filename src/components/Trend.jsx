const React = require('react');

const Trend = function (props) {
  return (
    <li className='trend'>
      <a className='trend-link' href={props.trend.url}><strong>{props.trend.name}</strong></a>
      <p>{props.trend.name} is currently trending on twitter in your location</p>
    </li>
  );
};

module.exports = Trend;
