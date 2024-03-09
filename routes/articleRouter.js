const express = require("express");
const articleController = require("../controllers/articleController");

const router = express.Router();

router.get("/", articleController.getAllPosts);

router.get("/all", articleController.getAll);
router.post ("/new", articleController.addArticlecontroller)


module.exports = router;
