const React = require('react');

const Link = require('./Link');

const InfoCard = function (props) {
  return (
    <div className='column is-4 hlight' >
      <Link url={`https://twitter.com/${props.handle}`}>
        <h6 className='small-title m-y-1'>{props.title}</h6>
      </Link>
      <Link url={`https://twitter.com/${props.handle}`}>
        <span className='trend-link user-data'><strong>{props.data}</strong></span>
      </Link>
    </div>
  );
};

module.exports = InfoCard;
