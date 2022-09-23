const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');
const restaurantRoutes = require('./restaurantRoutes');

router.use('/users', reviewRoutes);
router.use('/projects', restaurantRoutes);

module.exports = router;