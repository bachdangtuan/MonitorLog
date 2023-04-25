'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert('projects', [

            {
                nameCompany: "Isofh Company",
                avatar: '../assets/images/benhvien/isofh.png',
                introduction: 'ISOFH là Công ty Công nghệ cung cấp các giải pháp quản lý thông tin y tế hàng đầu tại thị trường Việt Nam. Đồng hành cùng 6.000 chuyên gia y tế, Hệ thống giải pháp phần mềm của ISOFH đã mang đến những trải nghiệm về Bệnh viện thông minh, hiện đại và chuyên nghiệp cho hơn 4 triệu người bệnh.',
                email: 'info@isofh.com',
                phoneNumber: '024 232 122 55',
                address: '35 Nguyễn Đình Chiểu, Lê Đại Hành, Hai Bà Trưng, Hà Nội.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nameCompany: "Bệnh viện E",
                avatar: '../assets/images/benhvien/viene.png',
                introduction: 'Bệnh viện E là bệnh viện đa khoa trung ương hạng I trực thuộc Bộ Y tế, được thành lập theo Quyết định số 175/TTg-Vg của Thủ tướng Chính phủ ngày 17 tháng 10 năm 1967 nhằm đáp ứng yêu cầu điều trị cho cán bộ, chiến sĩ từ chiến trường miền Nam ra. Trải qua 55 năm xây dựng và phát triển, với những thăng trầm của lịch sử, đội ngũ cán bộ, bác sĩ, nhân viên của Bệnh viện E đã vượt qua mọi khó khăn, hoàn thành xuất sắc nhiệm vụ mà Đảng, Chính phủ và Bộ Y tế giao.',
                email: 'bvetuvanonline@gmail.com',
                phoneNumber: '081.846.7686',
                address: '89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội',
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