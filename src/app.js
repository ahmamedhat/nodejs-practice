const express = require("express");
const morgan = require("morgan");
const { bagsRoutes } = require("../routes/bags.routes");

const app = express();

app.use(morgan("combined"));

app.use(express.json());

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Lux Bags",
    caption: "Welcome to the best bags shop ever",
    body: "Here you'll find the best materials and quality you can ever see!",
  });
});

app.use("/bags", bagsRoutes);

module.exports = app;
