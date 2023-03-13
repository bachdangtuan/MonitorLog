const { LogDatabase } = require("../models/LogDatabase");

const postInfoBackUptoDB = async (req, res, next) => {
  try {
    const { hostname, ipServer, pathBackup, capacityFile, status, nameDatabase } = req.body;

    const logDatabase = new LogDatabase({
      ipServer: ipServer,
      hostName: hostname,
      pathBackup: pathBackup,
      status: status,
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
  } catch (e) { }
};

module.exports = {
  postInfoBackUptoDB,
};
