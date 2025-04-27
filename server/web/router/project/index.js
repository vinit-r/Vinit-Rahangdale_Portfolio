const express = require("express");
const { addProject, getProject, updateProject, deleteProject } = require("../../controller");

const ProjectRoute = express.Router();

ProjectRoute.post("/add/:userId", addProject);
ProjectRoute.get("/get/:userId", getProject);
ProjectRoute.put("/update/:userId", updateProject);
ProjectRoute.delete("/delete/:userId", deleteProject);

module.exports = ProjectRoute;
