'use strict';

// dependencies
var jsonfile = require('jsonfile');
var path = require('path');

var testData = jsonfile.readFileSync(__dirname + '/../models/db/data/test.json');

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    }).then(function (done) {
      queryInterface.bulkInsert('Tests', testData).then(done);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Tests');
  }
};