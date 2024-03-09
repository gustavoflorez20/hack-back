const express = require("express");
const chatGptController = require("../controllers/chatGptController");

const router = express.Router();

router.get("/test", chatGptController.getResponse);

module.exports = router;
