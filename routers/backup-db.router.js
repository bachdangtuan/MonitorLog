const express = require('express');
const {postInfoBackUptoDB} = require("../controller/log-backup-db");


const logBackupRouter = express.Router();

logBackupRouter.post('/info', postInfoBackUptoDB)

module.exports = {
    logBackupRouter
}
