const express = require("express");
const {
  createContainerService,
  getDetailContainer,
} = require("../controller/containerservice.controller");
const createServiceContainerRouter = express.Router();

createServiceContainerRouter.post("/create", createContainerService);

createServiceContainerRouter.get("/list", getDetailContainer);

module.exports = {
  createServiceContainerRouter,
};
