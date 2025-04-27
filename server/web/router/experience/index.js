const express = require("express");
const { addExperience, getExperience, updateExperience, deleteExperience } = require("../../controller");

const ExperienceRoute = express.Router();

ExperienceRoute.post("/add/:userId", addExperience);
ExperienceRoute.get("/get/:userId", getExperience);
ExperienceRoute.put("/update/:userId", updateExperience);
ExperienceRoute.delete("/delete/:userId", deleteExperience);

module.exports = ExperienceRoute;
