const express = require("express");
const articleController = require("../controllers/articleController");
const router = express.Router();


router.get("/", articleController.getAll); 
router.post ("/new", articleController.addArticlecontroller);
router.post ("/id", articleController.getArticleById);

module.exports = router;
