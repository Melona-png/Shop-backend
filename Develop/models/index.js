// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product model
class Product extends Model {}
Product.init({
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
}, {
  sequelize,
  modelName: 'category'
});

// Tag model
class Tag extends Model {}
Tag.init({
}, {
  sequelize,
  modelName: 'tag'
});

// ProductTag model
class ProductTag extends Model {}
ProductTag.init({
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
