const router = require('express').Router();
const { User, Restaurant, Review } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all Restaurants and JOIN with user data
//     const restaurantData = await Restaurant.findAll({
//       include: [{ model: Review}],
//     });

//     // Serialize data so the template can read it
//     const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       restaurants, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [{ model: Review}],
    });
    res.render('homepage', { 
      restaurants, 
      logged_in: req.session.logged_in 
    });
    // res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/restaurant/:id', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findByPk(req.params.id, {
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    });

    const restaurant = restaurantData.get({ plain: true });

    res.render('restaurant', {
      ...restaurant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Review }],
    });

    // const reviewData = await Review.findAll({
    //   where: {
    //     user_id: req.session.user_id,
    //   },
    //   attributes: {
    //     include: [{
    //       model: Restaurant,
    //     }]
    //   }
    // })

    const user = userData.get({ plain: true });
    // const reviews = reviewData.get({ plain: true });

    console.log(user);
    res.render('profile', {
      ...user,
      // reviews,
      logged_in: true //need to fix later to see where the user is logged in otherwise anyone can get into the info
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

