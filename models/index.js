const Restaurant = require('./Restaurant');
const Review = require('./Review');
const User = require('./User');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
  });
module.exports = { User, Restaurant, Review };
