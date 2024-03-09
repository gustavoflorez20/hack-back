const Article = require("../models/Article");

const articleController = {
  getAllPosts: async (req, res) => {
    try {
      
      // query vacia devolemos todos los posts
      const article = await Article.find();
      return res.json(article);
      // comprobar la query con la expresion de mas de tres caracteres
      // ir mostrando los articulos que coincidan en la base de datos
    } catch (error) {
      res.status(500).send("Unable to find posts");
    }
  },
};

module.exports = articleController;
