const express = require("express");
const articleController = require("../controllers/articleController");

const router = express.Router();

router.get("/", articleController.getAllPosts);

module.exports = router;
