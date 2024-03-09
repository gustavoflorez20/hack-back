const express = require("express");
const {articleController,addArticlecontroller } = require("../controllers/articleController");

const router = express.Router();


router.get("/", articleController.getAll);
router.post ("/new", addArticlecontroller)


module.exports = router;
