const { Model, DataTypes } = require('sequelize');

const sequelize = require('./sequelize');

class Product extends Model {}
Product.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelize.getSequelize(),
    indexes: [
      {
        fields: ['title'],
        using: 'gin',
        operator: 'text_pattern_ops',
      },
    ],
    modelName: 'products',
  },
);

module.exports = Product;
