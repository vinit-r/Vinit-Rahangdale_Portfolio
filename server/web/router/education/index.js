const express = require("express");
const { addEducation, getEducation, updateEducation, deleteEducation } = require("../../controller");

const EducationRoute = express.Router();

EducationRoute.post("/add/:userId", addEducation);
EducationRoute.get("/get/:userId", getEducation);
EducationRoute.put("/update/:userId", updateEducation);
EducationRoute.delete("/delete/:userId", deleteEducation);

module.exports = EducationRoute;
