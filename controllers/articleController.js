const Article = require("../models/Article");

const articleController = {
  getAll: async (req, res) => {
    const articleList = await Article.find()
    try {

      
      res.json({ articles });
    } catch (error) {
      console.error('Error al obtener todos los artículos:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
=======
      res.send(articleList);
    } catch (error) {}

  },

  addArticlecontroller: async (req, res) => {
    try {
      console.log('Creando Artículo:');
      const articleData = req.body;

      const articlesToBeAdded = articleData.map((data) => new Article({
        Titulo: data.title,
        Autor: data.author,
        Texto: data.text,
      }));

      const createdArticles = await Article.insertMany(articlesToBeAdded);

      console.log('Artículos Creados:', createdArticles);

      res.json({ Mensaje: 'Artículos creados correctamente', createdArticles });
    } catch (error) {
      console.error('Error al crear los Artículos:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  getArticleById: async (req, res) => {
    const _idController = req.params.id;

    try {
      const article = await Article.findById(_idController);

      if (!article) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
      }

      res.json({ article });
    } catch (error) {
      console.error('Error al buscar el artículo por _id:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
};

module.exports = articleController;
