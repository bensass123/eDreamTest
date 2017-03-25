'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    var jsonfile = require('jsonfile');
    var path = require('path');
    var jsonData = jsonfile.readFileSync(__dirname + '/../models/db/data/intermediateChallenges.json');
    console.log('intermediateChallenges up run');
    return queryInterface.createTable('Intermediate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      selfText: {
        type: Sequelize.TEXT
      },
      selfText_html: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
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
      queryInterface.bulkInsert('Intermediate', jsonData).then(done);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Intermediate');
  }
};
