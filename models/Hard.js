'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hard = sequelize.define('Hard', {
    selfText: DataTypes.TEXT,
    selfText_html: DataTypes.TEXT,
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    difficulty: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Hard;
};
