"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert(
            "virtualmachines",
            [
                {
                    ipaddress: "10.0.0.12",
                    nameVirtualMachine:"ReactJS",
                    cpu:'12%',
                    ram:'20%',
                    disk:'50%',
                    belongtoPhysicalMachine: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        // await queryInterface.bulkDelete("users", null, {});
    },
};
