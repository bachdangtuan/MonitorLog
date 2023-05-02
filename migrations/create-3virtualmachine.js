"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("VirtualMachines", {
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
            usedram: {
                type: Sequelize.STRING,
            },
            disk: {
                type: Sequelize.STRING,
            },
            diskused: {
                type: Sequelize.STRING,
            },
            belongtoPhysicalMachine: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'PhysicalMachines',
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
        await queryInterface.dropTable("VirtualMachines");
    },
};
