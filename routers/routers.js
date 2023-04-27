const express = require('express')
const rootRouter = express.Router();
const {logBackupRouter} = require("./backup-db.router");
const {projectRouter} = require("./projects.router")
const {createVirtualRouter} = require("./virtual.router")
// rootRouter.use('/')
rootRouter.use('/databases', logBackupRouter)
rootRouter.use('/projects', projectRouter)
rootRouter.use('/virtualmachine', createVirtualRouter)
module.exports = {rootRouter}
