const express = require("express");
const { whatsAppConnect } = require("../../controller");

const WhatsAppConnectRoute = express.Router();

WhatsAppConnectRoute.post("/sendMessage", whatsAppConnect);
module.exports = WhatsAppConnectRoute;
