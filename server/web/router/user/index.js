const express = require("express");
const { createUser, getUser, updateUser, deleteUser } = require("../../controller");

const UserRoute = express.Router();

UserRoute.post("/create", createUser);
UserRoute.get("/get", getUser);
UserRoute.get("/get/:id", getUser);
UserRoute.put("/update/:id", updateUser);
UserRoute.delete("/delete/:id", deleteUser);

module.exports = UserRoute;
