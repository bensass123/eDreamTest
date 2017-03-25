'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    var jsonfile = require('jsonfile');
    var path = require('path');
    var jsonData = jsonfile.readFileSync(__dirname + '/../models/db/data/inspirationalPics.json');
    console.log('inspirationalPics up run');
    return queryInterface.createTable('Inspirational', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function (done) {
      queryInterface.bulkInsert('Inspirational', jsonData).then(done);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Inspirational');
  }
};