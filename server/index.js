const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./router")(app);
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("\nDB Connected...");
    app.listen(process.env.PORT || 6600, () => {
      console.log(`Ctrl+Click to open: http://localhost:${process.env.PORT || 6600}\n`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to transactions" });
});
