const express = require("express");
const {getAllProject, getDetailProject} = require('../controller/projects.controller')
const projectRouter = express.Router();

projectRouter.get("/total", getAllProject);
projectRouter.get("/detail/:id", getDetailProject);
module.exports = {
    projectRouter,
};
