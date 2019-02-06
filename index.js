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
// or require('./routes/authRoutes')(app) to bring in the routes for the app.

// dynamic port bindig for heroku

const PORT = process.env.PORT || 5000;

// tell node to watch traffic on which port. production = heorko port || development = 5000
app.listen(PORT);
