const express = require("express");
const {createVirtualMachine} = require('../controller/virtualmachine.controller')
const createVirtualRouter = express.Router();

createVirtualRouter.post("/create", createVirtualMachine);
module.exports = {
    createVirtualRouter,
};
