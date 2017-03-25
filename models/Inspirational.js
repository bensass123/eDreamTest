'use strict';
module.exports = function(sequelize, DataTypes) {
  var Inspirational = sequelize.define('Inspirational', {
    image: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Inspirational;
};