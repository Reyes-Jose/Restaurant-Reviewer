

const Restaurant = require('./Restaurant');
const Review = require('./Review');

Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
});

module.exports = { Restaurant, Review };
