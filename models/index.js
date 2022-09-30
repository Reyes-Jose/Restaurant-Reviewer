const Restaurant = require('./Restaurant');
const Review = require('./Review');
const User = require('./User');

// A user can have many reviews, but no direct
// Relationship with a Restaurant
User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// A Restaurant has many reviews
Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE'
});

// A Review belongs to a Restaurant, but is associated
// with a User through the user_id (see the foreignKey assignment
// with the User associated below this assignment)
Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
  });

module.exports = { User, Restaurant, Review };
