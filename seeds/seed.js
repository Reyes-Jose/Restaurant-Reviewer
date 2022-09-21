const sequelize = require('../config/connection');
const { Review, Restaurant } = require('../models');

const restaurantData = require('./restaurantData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const restaurant = await Restaurant.bulkCreate(restaurantData, {
    individualHooks: true,
    returning: true,
  });

  for (const review of reviewData) {
    await Review.create({
      ...review,
      restaurant_id: restaurant[Math.floor(Math.random() * restaurant.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
