const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// dynamic port bindig for heroku

const PORT = process.env.PORT || 5000;

// tell node to watch traffic on which port. production = heorko port || development = 5000
app.listen(PORT);
