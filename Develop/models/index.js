// import models
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

// Define models
class Product extends Model {}
Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'product'
});

// Define association between Product and Category
Product.belongsTo(Category);
Category.hasMany(Product);

// Define association between Product and Tag
Product.belongsToMany(Tag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });

// Category model
class Category extends Model {}
Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'category'
});

// Tag model
class Tag extends Model {}
Tag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'tag'
});

// ProductTag model
class ProductTag extends Model {}
ProductTag.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'product_tag'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
