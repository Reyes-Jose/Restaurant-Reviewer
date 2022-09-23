const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/reviews', reviewRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;