const express = require("express");
const {articleController,addArticle } = require("../controllers/articleController");

const router = express.Router();


router.get("/", articleController.getAll);
router.post ("/new", addArticle)


module.exports = router;
