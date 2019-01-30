const express = require('express');

require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);
// or require('./routes/authRoutes')(app) to bring in the routes for the app.

// dynamic port bindig for heroku

const PORT = process.env.PORT || 5000;

// tell node to watch traffic on which port. production = heorko port || development = 5000
app.listen(PORT);
