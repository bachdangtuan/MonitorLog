"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("VirtualMachine", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nameVirtualMachine: {
                type: Sequelize.STRING,
            },
            ipaddress: {
                type: Sequelize.STRING,
            },
            cpu: {
                type: Sequelize.STRING,
            },
            ram: {
                type: Sequelize.STRING,
            },
            disk: {
                type: Sequelize.STRING,
            },
            belongtoPhysicalMachine: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'PhysicalMachine',
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
        await queryInterface.dropTable("VirtualMachine");
    },
};
