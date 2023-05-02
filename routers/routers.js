const express = require('express')
const rootRouter = express.Router();
const {logBackupRouter} = require("./backup-db.router");
const {projectRouter} = require("./projects.router")
const {createVirtualRouter} = require("./virtual.router")
const {createServiceContainerRouter} = require("./servicecontainer.router")

// rootRouter.use('/')
rootRouter.use('/databases', logBackupRouter)
rootRouter.use('/projects', projectRouter)
rootRouter.use('/virtualmachine', createVirtualRouter)
rootRouter.use('/servicecontainer', createServiceContainerRouter)
module.exports = {rootRouter}
