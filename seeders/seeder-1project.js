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
      "Projects",
      [
        {
          // 1
          nameCompany: "Isofh Company",
          avatar: "../assets/images/benhvien/isofh.png",
          introduction:
            "ISOFH là Công ty Công nghệ cung cấp các giải pháp quản lý thông tin y tế hàng đầu tại thị trường Việt Nam. Đồng hành cùng 6.000 chuyên gia y tế, Hệ thống giải pháp phần mềm của ISOFH đã mang đến những trải nghiệm về Bệnh viện thông minh, hiện đại và chuyên nghiệp cho hơn 4 triệu người bệnh.",
          email: "info@isofh.com",
          phoneNumber: "024 232 122 55",
          address: "35 Nguyễn Đình Chiểu, Lê Đại Hành, Hai Bà Trưng, Hà Nội.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 2
          nameCompany: "Bệnh viện E",
          avatar: "../assets/images/benhvien/viene.png",
          introduction:
            "Bệnh viện E là bệnh viện đa khoa trung ương hạng I trực thuộc Bộ Y tế, được thành lập theo Quyết định số 175/TTg-Vg của Thủ tướng Chính phủ ngày 17 tháng 10 năm 1967 nhằm đáp ứng yêu cầu điều trị cho cán bộ, chiến sĩ từ chiến trường miền Nam ra. Trải qua 55 năm xây dựng và phát triển, với những thăng trầm của lịch sử, đội ngũ cán bộ, bác sĩ, nhân viên của Bệnh viện E đã vượt qua mọi khó khăn, hoàn thành xuất sắc nhiệm vụ mà Đảng, Chính phủ và Bộ Y tế giao.",
          email: "bvetuvanonline@gmail.com",
          phoneNumber: "081.846.7686",
          address: "89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 3
          nameCompany: "Phòng khám Mediplus",
          avatar: "../assets/images/benhvien/mediplus.png",
          introduction:
            "Tổ hợp Y tế MEDIPLUS – Ứng dụng sự đổi mới trong công nghệ và áp dụng mô hình y tế “chuẩn Singapore”, mang lại cho người dân dịch vụ khám chữa bệnh chất lượng cao, tiếp cận phương pháp, kỹ thuật và phác đồ hiện đại, được hưởng các dịch vụ cao cấp “đi khám như đi nghỉ dưỡng” như ở nước ngoài và góp phần phát triển bền vững hệ sinh thái y tế Việt Nam.",
          email: "info@mediplus.vn",
          phoneNumber: "0899663366",
          address:
            "Tầng 2, TTTM Mandarin Garden 2, Phường Tân Mai, Quận Hoàng Mai, Thành phố Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 4
          nameCompany: "Bệnh viện xanh phôn",
          avatar: "../assets/images/benhvien/xanhphon.png",
          introduction:
            "Bệnh viện Đa khoa Xanh Pôn (Xanh Pôn là cách phiên âm từ L'Hôpital de Saint-Paul trong tiếng Pháp, nghĩa là Bệnh viện Thánh Phaolô) là một bệnh viện đa khoa tuyến cuối trực thuộc Sở Y tế Hà Nội.",
          email: "......",
          phoneNumber: "0438233075",
          address: "12 Chu Văn An, Ba Đình, Hà Nội\n",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 5
          nameCompany: "Phòng khám Y Tế Công Cộng",
          avatar: "../assets/images/benhvien/congcong.png",
          introduction:
            "Phòng khám quy tụ đội ngũ chuyên gia có trình độ chuyên môn, tận tâm. Dịch vụ khám, tư vẫn và chữa bệnh toàn diện, chất lượng; không gian văn minh, lịch sự, đảm bảo kiểm soát nhiễm khuẩn",
          email: "......",
          phoneNumber: "024.6265.0722",
          address: "1A Đức Thắng, P. Đức Thắng, Q. Bắc Từ Liêm, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 6
          nameCompany: "Trung Tâm Tim Mạch Viện E",
          avatar: "../assets/images/benhvien/daihocy.png",
          introduction:
            "Trung tâm Tim mạch – Bệnh viện E được thành lập ngày 26/8/2009 theo Quyết định 3099/QĐ-BYT với nhiệm vụ điều trị các bệnh lý tim mạch và lồng ngực. Ca mổ tim hở đầu tiên được thực hiện vào ngày 24/2/2010 đã đánh dấu bước phát triển của Trung tâm, từ đó đến nay Trung tâm Tim mạch đã gặt hái được nhiều thành công, trở thành điểm sáng của ngành y tế và được đông đảo nhân dân gần xa tin tưởng.",
          email: "contact@phusanthienan.com",
          phoneNumber: "(+84) 83754 3832",
          address: "89 Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 7
          nameCompany: "Phòng khám Dr Allen",
          avatar: "../assets/images/benhvien/drallen.png",
          introduction:
            "Hệ thống phòng khám quốc tế Dr.Allen Chiropractic là đơn vị tiên phong ứng dụng liệu pháp Chiropractic trong phác đồ đa chuyên khoa điều trị bệnh lý cơ – xương khớp – cột sống mang lại hiệu quả tối ưu mà không phẫu thuật – không dùng thuốc. Không chỉ giúp khách hàng chữa lành các cơn đau, điều trị từ gốc bệnh mà còn hướng tới giúp khách hàng thay đổi quan điểm, thói quen chủ động chăm sóc sức khỏe xương khớp.",
          email: "admin@drallen.com.vn",
          phoneNumber: "19001599",
          address:
            "Tầng 1, tòa nhà Trung Yên Plaza, Số 1 Trung Hòa, Cầu Giấy, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 8
          nameCompany: "Bệnh viện đa khoa Thanh Hóa",
          avatar: "../assets/images/benhvien/dkth.png",
          introduction:
            "Bệnh viện Đa khoa tỉnh Thanh Hóa được thành lập từ năm 1899, đến nay đã là Bệnh viện hạng I, có quy mô 1.200 giường bệnh, với 1.226 cán bộ viên chức, người lao động.",
          email: "lienhe@bvdktinhthanhhoa.com.vn",
          phoneNumber: "0237.3951467",
          address: "Số 181 Hải Thượng Lãn Ông- Phường Đông Vệ - TP Thanh Hóa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 9
          nameCompany: "Bệnh viện đại học Y",
          avatar: "../assets/images/benhvien/daihocy.png",
          introduction:
            "Bệnh viện Đại học Y Hà Nội được thành lập theo Quyết định số 137/QĐ-BYT ngày 16/01/2007 của Bộ trưởng Bộ Y tế và chính thức đi vào hoạt động ngày 19/9/2007.Bệnh viện Đại học Y Hà Nội thành lập là niềm mong muốn, ước mơ của nhiều thế hệ thầy và trò Trường Đại học Y Hà Nội.",
          email: "benhviendaihocyhanoi@hmuh.vn",
          phoneNumber: "0982873112",
          address: "Số 1 Tôn Thất Tùng, Phường Trung Tự, Quận Đống Đa, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 10
          nameCompany: "Bệnh viện Bạch Mai",
          avatar: "../assets/images/benhvien/bachmai.png",
          introduction:
            "Bệnh viện Bạch Mai là bệnh viện đầu tiên trong nước được nhận danh hiệu đặc biệt. Hiện tại bệnh viện Bạch Mai có 1.400 giường bệnh, tất cả trưởng khoa, giám đốc các trung tâm đều có trình độ sau đại học. Tỉ lệ tử vong của bệnh nhân chỉ từ 0,8-0,9% và tỉ lệ sử dụng giường bệnh đạt 153% (so với tiêu chí đề ra là 85%).",
          email: ".......",
          phoneNumber: "+84 24 3869 3731",
          address: "78 Đường Giải Phóng, Phương Mai, Đống Đa, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 11
          nameCompany: "Bệnh viện Phổi",
          avatar: "../assets/images/benhvien/phoi.png",
          introduction:
            "Bệnh viện Bạch Mai là bệnh viện đầu tiên trong nước được nhận danh hiệu đặc biệt. Hiện tại bệnh viện Bạch Mai có 1.400 giường bệnh, tất cả trưởng khoa, giám đốc các trung tâm đều có trình độ sau đại học. Tỉ lệ tử vong của bệnh nhân chỉ từ 0,8-0,9% và tỉ lệ sử dụng giường bệnh đạt 153% (so với tiêu chí đề ra là 85%).",
          email: "bvptw@bvptw.org",
          phoneNumber: "0243 8326 249",
          address: "Số 463 Hoàng Hoa Thám - Ba Đình - Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 12
          nameCompany: "Bệnh viện Quân y 110",
          avatar: "../assets/images/benhvien/qy110.png",
          introduction:
            "Bệnh viện Quân y 110 thuộc Cục Hậu cần, Quân khu 1 là Bệnh viện đa khoa Hạng 1. Có nhiệm vụ chính trị trung tâm là khám bệnh, thu dung, cấp cứu, điều trị cho các đơn vị quân đội trên tuyến, cơ quan, đơn vị, công ty và nhân dân trên địa bàn đơn vị đóng quân, sẵn sàng thực hiện các nhiệm vụ khác khi được cấp trên giao.",
          email: "cntt.v110@gmail.com",
          phoneNumber: "0243 8326 249",
          address:
            " Số 7 đường Trần Lựu, Phường Thị Cầu, TP Bắc Ninh, Tỉnh Bắc Ninh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 13
          nameCompany: "Phòng khám VietLife",
          avatar: "../assets/images/benhvien/daihocy.png",
          introduction:
            "Vietlife có một hệ thống chăm sóc sức khỏe với ít nhất là 3 Bệnh viện tối thiểu 1000 giường – 5 Trung tâm chẩn đoán tại Việt Nam – 3 Trung tâm tại Lào, Myanma và Campuchia – 40 Phòng khám đa khoa trên cả nước – 8 Resort dưỡng lão tại Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Nha Trang, Úc, Mỹ, Pháp và Nhật, hàng năm chúng tôi phục vụ và cung cấp giải pháp y tế chăm sóc sức khỏe cho khoảng 1 triệu người tại Việt Nam và Thế giới.",
          email: "...",
          phoneNumber: " 0906.993.330",
          address: " Số 14 Trần Bình Trọng - Hoàn Kiếm - Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 14
          nameCompany: "Phòng khám MYREHAB",
          avatar: "../assets/images/benhvien/myrehab.png",
          introduction:
            "Trung tâm MYREHAB mang tiêu chuẩn quốc tế với những trang thiết bị hiện đại nhất từ Âu – Mỹ, ứng dụng công nghệ vào các phương pháp điều trị, giúp cá nhân hóa liệu trình trị liệu, thúc đẩy cá nhân duy trì luyện tập phục hồi chức năng và cải thiện sức khỏe. ",
          email: "info@myrehab.vn",
          phoneNumber: "1900 3181",
          address:
            " Số 2 Tòa nhà CONINCO, số 4 Tôn Thất Tùng, Đống Đa, Hà Nội.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 15
          nameCompany: "Phòng khám Chân Trời Mới",
          avatar: "../assets/images/benhvien/chantroimoi.png",
          introduction:
            "Công ty TNHH Chăm sóc giảm nhẹ Chân trời mới tiền thân là một Trung tâm chăm sóc giảm nhẹ cho Người cao tuổi, tọa lạc cạnh khu đô thị Ecopark từ năm 2016",
          email: "...",
          phoneNumber: "024 7306 1668",
          address: "Số 76 phố An Dương - Phường Yên Phụ- Quận Tây Hồ- Hà Nội.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 16
          nameCompany: "Bệnh viện Việt Mỹ",
          avatar: "../assets/images/benhvien/vietmy.png",
          introduction:
            "Bệnh Viện Thẩm Mỹ Việt Mỹ (Giám đốc Bác sĩ Chiêm Quốc Thái) là một trong những bệnh viện thẩm mỹ - thẩm mỹ viện lớn và uy tín tại TP.HCM với diện tích 3000m2. Tọa lạc ngay trung tâm Q.1 Tp.HCM thiết kế theo tiêu chuẩn Bệnh Viện Thẩm Mỹ Quốc Tế",
          email: " tuvan@benhvienvietmy.com",
          phoneNumber: "0942 757 888",
          address: "331 Nguyễn Trãi, Nguyễn Cư Trinh, Q1, TP.HCM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 17
          nameCompany: "Bệnh Viện Đa khoa Thái Hòa",
          avatar: "../assets/images/benhvien/default.png",
          introduction: "",
          email: "...",
          phoneNumber: "",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 18
          nameCompany: "Bệnh Viện Việt Nhật",
          avatar: "../assets/images/benhvien/default.png",
          introduction: "",
          email: "...",
          phoneNumber: "",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 19
          nameCompany: "Ung Bướu Khánh Hòa",
          avatar: "../assets/images/benhvien/default.png",
          introduction: "",
          email: "...",
          phoneNumber: "",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 20
          nameCompany: "Bệnh viện phụ sản Thiện An",
          avatar: "../assets/images/benhvien/default.png",
          introduction: "",
          email: "contact@phusanthienan.com",
          phoneNumber: "1900-633-081",
          address: "27 Ngõ 603 Lạc Long Quân, Tây Hồ, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 21
          nameCompany: "Phòng khám YKHN",
          avatar: "../assets/images/benhvien/default.png",
          introduction: "",
          email: "contact@phusanthienan.com",
          phoneNumber: "1900-633-081",
          address: "27 Ngõ 603 Lạc Long Quân, Tây Hồ, Hà Nội",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 22
          nameCompany: "Bệnh viện Nhi Đồng TPHCM",
          avatar: "../assets/images/benhvien/ndtp.png",
          introduction: "Là Bệnh viện CÔNG LẬP chăm sóc sức khỏe toàn diện cho trẻ em dựa trên giá trị cốt lõi là TẬN TÂM- NĂNG ĐỘNG- HỢP TÁC- CÔNG BẰNG.",
          email: "bv.nhidong@tphcm.gov.vn  ",
          phoneNumber: "19001217",
          address: "15 Đ. Võ Trần Chí, Tân Kiên, Bình Chánh, Thành phố Hồ Chí Minh",
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
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
