const { Model, DataTypes } = require('sequelize');

class Product extends Model {}
Product.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
  },
});

module.exports = Product;
