const Restaurant = require('./Restaurant');
const Review = require('./Review');
const User = require('./User');

User.hasMany(Review, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
});

module.exports = { User, Restaurant, Review };
