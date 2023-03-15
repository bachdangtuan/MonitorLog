const express = require("express");
const {
  postInfoBackUptoDB,
  getTotalLogBackupDB,
} = require("../controller/log-backup-db");

const logBackupRouter = express.Router();

logBackupRouter.post("/info", postInfoBackUptoDB);
logBackupRouter.get("/total", getTotalLogBackupDB);
module.exports = {
  logBackupRouter,
};
