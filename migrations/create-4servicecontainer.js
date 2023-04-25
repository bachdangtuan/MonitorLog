"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("ServiceContainer", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nameServiceContainer: {
                type: Sequelize.STRING,
            },
            cpu: {
                type: Sequelize.STRING,
            },
            ram: {
                type: Sequelize.STRING,
            },
            ipaddress: {
                type: Sequelize.STRING,
            },
            belongtoVirtualMachine: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'VirtualMachine',
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
        await queryInterface.dropTable("ServiceContainer");
    },
};
