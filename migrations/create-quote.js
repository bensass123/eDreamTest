'use strict';

// dependencies



module.exports = {
  up: function(queryInterface, Sequelize) {
    var jsonfile = require('jsonfile');
    var path = require('path');
    var jsonData = jsonfile.readFileSync(__dirname + '/../models/db/data/quotes.json');
    console.log('quotes up run');
    return queryInterface.createTable('Quote', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.TEXT
      },
      author: {
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
      queryInterface.bulkInsert('Quote', jsonData).then(done);
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Quote');
  }
};
