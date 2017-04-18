const React = require('react');

const Link = function (props) {
  return <a href={props.url}>{props.children}</a>;
};

module.exports = Link;
