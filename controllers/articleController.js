const Article = require("../models/Article");

const articleController = {
  getAllPosts: async (req, res) => {
    try {
      // obtenemos el texto por query
      const articleText = req.query.text;

      // Verificamos si el articleText tiene al menos tres caracteres alfabéticos
      const regex = '/^[a-zA-Z]{3,}$/g';

      if (!regex.test(articleText)) {
        return res.status(400).send("La consulta debe contener al menos tres caracteres alfabéticos.");
      }

      // Devolvemos los que coinciden con el article text
      const articles = await Article.find({ title: { $regex: new RegExp(searchText, 'i') } });

      if (articles.length === 0) {
        return res.status(404).send("No se encontraron artículos con el texto proporcionado.");
      }

      res.status(200).json(articles);
    } catch (error) {
      res.status(500).send("Unable to find posts");
    }
  },
};

module.exports = articleController;
