# Northwitter

A mock-up of twitter using the twitter API to bring in live trending topics and tweets.

## API documentation

### GET routes

#### Status
<https://protected-oasis-31937.herokuapp.com/>
Check the status of the application

#### Handles
<https://protected-oasis-31937.herokuapp.com/handles>
Check which twitter handles are available to get data for

#### Trends
<https://protected-oasis-31937.herokuapp.com/trends>
Get twitters current trends

#### Tweets
<https://protected-oasis-31937.herokuapp.com/tweets>
Get all tweets for all handles

#### Individual handle's tweets
<https://protected-oasis-31937.herokuapp.com/tweets/northcoders>
Get tweets for a certain handle. In this case 'northcoders'

#### Individual handle's followers
<https://protected-oasis-31937.herokuapp.com/followers/northcoders>
Get followers for a certain handle. In this case 'northcoders'

#### Individual handle's following
<https://protected-oasis-31937.herokuapp.com/following/northcoders>
Get following for a certain handle. In this case 'northcoders'

### POST routes

#### Success
<https://protected-oasis-31937.herokuapp.com/serve-ok>
Dummy post route which returns a status 200 OK

#### Error
<https://protected-oasis-31937.herokuapp.com/serve-error>
Dummy post route which returns a status 500 ERROR
