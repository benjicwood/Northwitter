const React = require('react');

const Link = require('./Link');
const InfoCard = require('./InfoCard');

const ProfileBox = function (props) {
  const {name, handle, tweets, followers, following, profileImg, profileBanner} = props.user;
  return (
    <div className='box paddingless'>
      <div className='card-image'>
        <figure className='image is-2by3'>
          <Link url={`https://twitter.com/${handle}`}>
            <img src={profileBanner} alt='' />
          </Link>
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-32x32'>
              <Link url={`https://twitter.com/${handle}`}>
                <img className='rounded' src={profileImg} />
              </Link>
            </figure>
          </div>
          <div className='media-content'>
            <Link url={`https://twitter.com/${handle}`}>
              <p className='title is-5 hover-strong hover-underline'>{name}</p>
              <p className='subtitle is-6 hover-strong hover-underline'>{`@${handle}`}</p>
            </Link>
          </div>
        </div>
        <div className='content columns no-decoration'>
          <InfoCard handle={handle} title='TWEETS' data={tweets} />
          <InfoCard handle={handle} title='FOLLOWING' data={following} />
          <InfoCard handle={handle} title='FOLLOWERS' data={followers} />
        </div>
      </div>
    </div>
  );
};

module.exports = ProfileBox;
