const express = require("express");
const { addTechnology, getTechnology, updateTechnology, deleteTechnology } = require("../../controller");

const TechnologyRoute = express.Router();

TechnologyRoute.post("/add/:userId", addTechnology);
TechnologyRoute.get("/get/:userId", getTechnology);
TechnologyRoute.put("/update/:userId", updateTechnology);
TechnologyRoute.delete("/delete/:userId", deleteTechnology);

module.exports = TechnologyRoute;
