const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./database/db");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 8080);
app.set("secretKey", process.env.SECRET_KEY);

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-access-token");
  next();
});

app.listen(app.get("port"), async () => {
  try {
    console.log(`app listening on port ${app.get("port")}!`);
    await sequelize.sync({ force: false });
    console.log("Connection success");
  } catch (err) {
    console.log("Connection falied", err);
  }
});

// routes
const usersRoutes = require("./routes/users");
const categoriesRoutes = require("./routes/categories");
const operationsRoutes = require("./routes/operations");

app.use("/auth", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/operations", operationsRoutes);
