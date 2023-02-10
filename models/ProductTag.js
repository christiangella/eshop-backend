const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// creating a model instance of product tag
ProductTag.init(
  {
    // defining and specifying id properties
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // defining and specifying tag_id properties
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'tag'
      }
    },
    // defining and specifying product id properties
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'product'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
