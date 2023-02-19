// requiring the default models from sequelize
const { Model, DataTypes } = require('sequelize');
// requiring the connection file in config
const sequelize = require('../config/connection.js');
// making a category table
class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// exporting category table
module.exports = Category;