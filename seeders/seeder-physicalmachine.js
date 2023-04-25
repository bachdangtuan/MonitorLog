'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('physicalmachine', [

            {
                ipadress: '10.0.0.8',
                type_machine: 'dell',
                namePhysicalMachine: 'PowerEdge R710',
                cpu: '12 CPUs x 2.261 Ghz Intel(R) Xeon(R) CPU K5640 @ 2.27Ghz ',
                ram: '64Gb',
                service: 'VM ESXi v6',
                disk: '2Tb (local)',
                belongtoCompany: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ipadress: '10.0.0.8',
                type_machine: 'dell',
                namePhysicalMachine: 'PowerEdge R710',
                cpu: '12 CPUs x 2.261 Ghz Intel(R) Xeon(R) CPU K5640 @ 2.27Ghz ',
                ram: '64Gb',
                service: 'VM ESXi v6',
                disk: '2Tb (local)',
                belongtoCompany: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('users', null, {});
    }
};