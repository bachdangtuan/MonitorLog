const express = require("express");
const {
  getDetailNameVirtualMachine,
  createVirtualMachine,
} = require("../controller/virtualmachine.controller");
const createVirtualRouter = express.Router();

createVirtualRouter.post("/create", createVirtualMachine);

createVirtualRouter.get("/getnameVM", getDetailNameVirtualMachine);

module.exports = {
  createVirtualRouter,
};
