require("dotenv").config();
const express = require("express");
const path = require("path");
const mailController = require("./controllers/mailController");

const app = express();

// Configure EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", mailController);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});