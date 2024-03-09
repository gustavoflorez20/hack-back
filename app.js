const express = require("express");
const app = express();
const cors = require("cors");
const {articleRouter , addArticle } = require("./routes/articleRouter");
const { addArticle } = require("./controllers/articleController");

const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/", articleRouter);
app.use ("/new",addArticle)

app.listen(port, () => {
  console.log("Rulandooooo server");
});
