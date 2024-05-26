'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compound extends Model {
    static associate(models) {
      // define association here
    }
  }
  Compound.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    CompoundName: DataTypes.STRING,
    CompounrDescription: DataTypes.TEXT,
    strImageSource: DataTypes.STRING,
    strImageAttribution: DataTypes.STRING,
    dateModified: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Compound',
  });
  return Compound;
};
