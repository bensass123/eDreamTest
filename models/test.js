'use strict';
module.exports = function(sequelize, DataTypes) {
  var Test = sequelize.define('Test', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Test;
};