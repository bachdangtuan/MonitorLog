const express = require('express')
const rootRouter = express.Router();
const {logBackupRouter} = require("./backup-db.router");


// rootRouter.use('/')
rootRouter.use('/databases', logBackupRouter)

module.exports = {rootRouter}
