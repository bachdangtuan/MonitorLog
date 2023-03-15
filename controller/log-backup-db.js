const { LogDatabase } = require("../models/LogDatabase");

const postInfoBackUptoDB = async (req, res, next) => {
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
      //   rangeTimeBackup: String,
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

  try {
    const logDatabase = await LogDatabase.find();

    res.status(200).send({
      message: "Danh sách log",
      logDatabase,
    });
  } catch (e) {
    res.status(500).send({
      message: "Server error !!",
    });
  }
};

module.exports = {
  postInfoBackUptoDB,
  getTotalLogBackupDB,
};
