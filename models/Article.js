const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  text: { type: String, require: true },
});

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
