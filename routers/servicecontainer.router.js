const express = require("express");
const {createContainerService} = require('../controller/containerservice.controller')
const createServiceContainerRouter = express.Router();

createServiceContainerRouter.post("/create", createContainerService);
module.exports = {
    createServiceContainerRouter,
};
