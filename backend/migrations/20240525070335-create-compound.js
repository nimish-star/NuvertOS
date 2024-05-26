'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Compounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompoundName: {
        type: Sequelize.STRING
      },
      CompounrDescription: {
        type: Sequelize.TEXT
      },
      strImageSource: {
        type: Sequelize.STRING
      },
      strImageAttribution: {
        type: Sequelize.STRING
      },
      dateModified: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Compounds');
  }
};
