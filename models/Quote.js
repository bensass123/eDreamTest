'use strict';
module.exports = function(sequelize, DataTypes) {
  var Quote = sequelize.define('Quote', {
    text: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Quote;
};
