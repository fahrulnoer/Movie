'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Review extends Model { }
  Review.init({
    reviewTitle: {
      type: Sequelize.STRING, validate: { notEmpty: {args : true , msg : 'Please fill in your review title'}}
    },
    description: {
      type: Sequelize.TEXT, validate: { notEmpty: {args : true, msg : 'Please fill in your review details!'}}
    },
    rating: {
      type : Sequelize.INTEGER, validate : {isInt : {args : true, msg :'Please choose between 1-10'} }
    },
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  },{ sequelize, modelName: 'Review' });
  
  Review.associate = function (models) {
    //! associations can be defined here
    Review.belongsTo(models.Movie)
    Review.belongsTo(models.User)
  };
  return Review;
};