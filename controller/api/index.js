const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const userRoutes = require('./userRoutes');

router.use('/reviews', reviewRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/users', userRoutes);

module.exports = router;