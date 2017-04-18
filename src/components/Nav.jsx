const React = require('react');

const Nav = React.createClass({
  render: function () {
    return (
      <div className='navvv'>
        <nav className='nav'>
          <div className='nav-left nav-menu'>
            <a className='nav-item' href='#'>
              <i className='fa fa-home' aria-hidden='true' />
             Home
          </a>
            <a className='nav-item' href='#'>
              <i className='fa fa-bolt' aria-hidden='true' />
             Moments
           </a>
            <a className='nav-item' href='#'>
              <i className='fa fa-bell' aria-hidden='true' />
             Notifications
          </a>
            <a className='nav-item' href='#'>
              <i className='fa fa-envelope' aria-hidden='true' />
             Messages
          </a>
          </div>
          <div className='nav-center'>
            <a className='nav-item' href='#' id='navlogo'>
              <span className='icon'>
                <i className='fa fa-twitter' />
              </span>
            </a>
          </div>
          <div className='nav-right'>
            <span className='nav-item'>
              <div className='field'>
                <p className='control'>
                  <input className='input' type='text' placeholder='Search Twitter...' />
                </p>
              </div>
              <a className='button is-primary' href='#'>
                <span className='icon'>
                  <i className='fa fa-twitter' />
                </span>
                <span>Tweet</span>
              </a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Nav;
