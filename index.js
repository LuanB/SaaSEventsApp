const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// middlewares

//bodyParser will parse any get into the server an parse the data for use.
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // express will server up production assets
  // like main.js file or main.css file
  // if express sees any route that is not defined then go and check clinet/build/static/main to see if any files match
  app.use(express.static('client/build'));

  // Express will serve up index.html file (ie react router: /surveys) if it doen't recognize the route after checking
  //  /rotes/authRoutes , billingRoutes & client/build
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// or require('./routes/authRoutes')(app) to bring in the routes for the app.

// dynamic port bindig for heroku

const PORT = process.env.PORT || 5000;

// tell node to watch traffic on which port. production = heorko port || development = 5000
app.listen(PORT);
