const Article = require("../models/Article");

const articleController = {
  getAllPosts: async (req, res) => {
    try {
      // obtenemos el texto por query
      const articleText = req.query.text;

      // Verificamos si el articleText tiene al menos tres caracteres alfabéticos
      const regex = new RegExp(`.*${articleText}.*`, 'i');

      if (!regex.test(articleText)) {
        return res.status(400).send("La consulta debe contener al menos tres caracteres alfabéticos.");
      }

      // Devolvemos los que coinciden con el article text
      const articles = await Article.find({ title: { $regex: regex} });

      if (articles.length === 0) {
        return res.status(404).send("No se encontraron artículos con el texto proporcionado.");
      }

      res.status(200).json(articles);
    } catch (error) {
      console.log(error)
      res.status(500).json({estado_test: "Unable to find posts"});
    }
  },
  getAll: async (req, res) => {
    const articleList = await Article.find()
    try {
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
  }
}


module.exports = articleController;


