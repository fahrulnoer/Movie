'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewTitle: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};