const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  // requireLogin is not called ie requireLogin() because when express loads up for the first time we dont
  // want to invoke it. Only when a user its the api/stipe end point that we want to invoke the function by
  // passing the referrece to the middleware that checks to see if the user is loged in.

  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // adds 5 credits to the user model. User mode is taken from passport: req.user
    req.user.credits += 5;

    // when the async req.user.save() finishes it returns the user model saved. This is the most upto date and we assign
    // it to user and then send that to the browser though res.send(user) to update the UI
    const user = await req.user.save();
    res.send(user);
  });
};
