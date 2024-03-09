require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const  articleRouter  = require("./routes/articleRouter");


const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/articles", articleRouter);

app.post("/new", articleRouter);

app.listen(PORT, () => {
  console.log("Rulandooooo server");
});

//connect to MongoDb
const mongoose = require('mongoose');
const connectionStringToDb = `mongodb+srv://${process.env.DB_NAME}`

async function main() {
  return await mongoose.connect(connectionStringToDb)
}
 main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

