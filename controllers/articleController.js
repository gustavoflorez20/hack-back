const Article = require("../models/Article");

const articleController = {
  getAll: async (req, res) => {
    try {
    } catch (error) {}
  },
};

async function addArticlecontroller(req, res) {
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



module.exports = {
  articleController,
  addArticlecontroller
};


