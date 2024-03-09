const Article = require("../models/Article");

const articleController = {
  getAll: async (req, res) => {
    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to find articles");
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const articleText = req.query.text;
      const page = req.query.page;
      const limit = req.query.limit;

      const articles = await Article.find({
        text: new RegExp(".{3,}" + articleText + ".*"),
      })
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(articles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to find posts");
    }
  },
};

module.exports = articleController;
