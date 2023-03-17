const { LogDatabase } = require("../models/LogDatabase");
const moment = require("moment");

const postInfoBackUptoDB = async (req, res, next) => {
  const dateBackup = moment().format("DD/MM/YYYY");
  const timeBackup = moment().format("HH:mm:ss");
  try {
    const {
      hostname,
      ipServer,
      pathBackup,
      capacityFile,
      status,
      nameDatabase,
      osSystems,
    } = req.body;

    const logDatabase = new LogDatabase({
      ipServer: ipServer,
      hostName: hostname,
      pathBackup: pathBackup,
      status: status,
      osSystems: osSystems,
      nameDatabase: nameDatabase,
      capacityFile: capacityFile,
      DateBackup: dateBackup,
      TimeBackup: timeBackup,
    });
    console.log(logDatabase);
    logDatabase.save().then();

    res.status(200).send({
      logDatabase,
      message: "Tạo thành công dữ liệu",
    });
  } catch (e) {}
};

const getTotalLogBackupDB = async (req, res, next) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const hostName = req.query.hostName || "";
  const nameDatabase = req.query.nameDatabase || "";

  try {
    const filter = {};
    if (hostName) {
      filter.hostName = hostName;
    }
    if (nameDatabase) {
      filter.nameDatabase = nameDatabase;
    }

    const logDatabase = await LogDatabase.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await LogDatabase.countDocuments(filter);

    res.status(200).send({
      message: "Lấy thành công",
      thisPage: page,
      limit: limit,
      data: logDatabase,
      totalItems: count,
    });
  } catch (e) {
    res.status(500).send({
      message: "Lỗi server !!",
    });
  }
};

// const getTotalLogBackupDB = async (req, res, next) => {
//   const limit = parseInt(req.query.limit) || 10;
//   const page = parseInt(req.query.page) || 1;

//   try {
//     const logDatabase = await LogDatabase.find();

//     res.status(200).send({
//       message: "Danh sách log",
//       logDatabase,
//     });
//   } catch (e) {
//     res.status(500).send({
//       message: "Server error !!",
//     });
//   }
// };

module.exports = {
  postInfoBackUptoDB,
  getTotalLogBackupDB,
};
