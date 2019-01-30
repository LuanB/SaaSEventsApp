const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);
// or require('./routes/authRoutes')(app) to bring in the routes for the app.

// dynamic port bindig for heroku

const PORT = process.env.PORT || 5000;

// tell node to watch traffic on which port. production = heorko port || development = 5000
app.listen(PORT);
