const express = require("express");
const { visitorsCount } = require("../../controller");

const VisitorRoute = express.Router();

VisitorRoute.get("/visitors", visitorsCount);
module.exports = VisitorRoute;
