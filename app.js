const express = require("express");
const app = express();
const cors = require("cors");
const articleRouter = require("./routes/articleRouter");

const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/", articleRouter);

app.listen(port, () => {
  console.log("Rulandooooo server");
});
