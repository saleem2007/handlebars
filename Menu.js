const {sequelize, DataTypes, Model} = require('./db');

class Menu extends Model { }

Menu.init({
    appetizer: DataTypes.STRING, 
    lunch: DataTypes.STRING,
    dinner: DataTypes.STRING,
    dessert: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
    
});

module.exports = { Menu };
