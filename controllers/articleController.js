const Article = require("../models/Article");

const articleController = {
  getAllPosts: async (req, res) => {
    try {
      const article = await Article.find();
      return res.json(article);
    } catch (error) {
      res.status(500).send("Unable to find posts");
    }
  },
};

module.exports = articleController;
