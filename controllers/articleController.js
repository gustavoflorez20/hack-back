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
        $or: [
          {
            title: new RegExp(".{3,}" + articleText + ".*"),
          },
          {
            text: new RegExp(".{3,}" + articleText + ".*"),
          },
        ],
      })
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(articles);
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to find posts");
    }
  },

  addArticlecontroller: async (req, res) => {
    try {
      console.log("Creando Artículo:");
      const articleData = req.body;

      const articlesToBeAdded = articleData.map(
        (data) =>
          new Article({
            Titulo: data.title,
            Autor: data.author,
            Texto: data.text,
          })
      );

      const createdArticles = await Article.insertMany(articlesToBeAdded);

      console.log("Artículos Creados:", createdArticles);

      res.json({ Mensaje: "Artículos creados correctamente", createdArticles });
    } catch (error) {
      console.error("Error al crear los Artículos:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  getArticleById: async (req, res) => {
    const _idController = req.params.id;

    try {
      const article = await Article.findById(_idController);

      if (!article) {
        return res.status(404).json({ error: "Artículo no encontrado" });
      }

      res.json({ article });
    } catch (error) {
      console.error("Error al buscar el artículo por _id:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

module.exports = articleController;
