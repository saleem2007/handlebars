const {sequelize, DataTypes, Model} = require('./db');

class Restaurant extends Model { }

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    ratings: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
});

module.exports = { Restaurant };