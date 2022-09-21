

const Restaurant = require('./Restaurant');
const Review = require('./Review');

Restaurant.hasMany(Review, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'review_id'
});

module.exports = { Restaurant, Review };
