const express = require("express");
const {getAllProject} = require('../controller/projects.controller')
const projectRouter = express.Router();

projectRouter.get("/total", getAllProject);
module.exports = {
    projectRouter,
};
