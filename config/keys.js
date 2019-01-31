// keys.js - figure out what set of credentials to return.
// when on heroku the process.env.NODE_ENV is set to production by heroku

if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys

  module.exports = require('./dev');
}
