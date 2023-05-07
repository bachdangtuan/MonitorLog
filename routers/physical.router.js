const express = require("express");
const {getDetailPhysicalMachine} = require('../controller/physicalmachine.controller')
const PhysicalRouter = express.Router();

PhysicalRouter.get("/detail/:id", getDetailPhysicalMachine);
module.exports = {
    PhysicalRouter,
};
