const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Review extends Model{}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,        
    },
    comment:{
        type: DataTypes.TEXT
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,        
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
}
);

module.exports = Review;