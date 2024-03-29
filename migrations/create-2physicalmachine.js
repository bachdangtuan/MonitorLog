"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("physicalmachines", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            namePhysicalMachine: {
                type: Sequelize.STRING,
            },
            ipadress: {
                type: Sequelize.STRING,
            },
            type_machine: {
                type: Sequelize.STRING,
            },
            service: {
                type: Sequelize.STRING,
            },
            ram: {
                type: Sequelize.STRING,
            },
            cpu: {
                type: Sequelize.STRING,
            },
            disk: {
                type: Sequelize.STRING,
            },
            belongtoCompany: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'projects',
                    key: "id",
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("physicalmachines");
    },
};
