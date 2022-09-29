const router = require('express').Router();
const { User, Restaurant, Review } = require('../models');
const withAuth = require('../utils/auth');

// Pass all Restaurants and their reviews to the homepage
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [{ model: Review}],
    });
    res.render('homepage', { 
      restaurants, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// If authenticated, then pass back a user's reviews to the profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Review, include: {model: Restaurant}}] 
    });

    const user = userData.get({ plain: true });

    // Pass the Restaurants back so that we can include them in the
    // drop down menu.
    const restaurants = await Restaurant.findAll();

    res.render('profile', {
      ...user,
      restaurants,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Take the user to their profile if the are logged in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;

