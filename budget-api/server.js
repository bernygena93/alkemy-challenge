const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./database/db");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 8080);

app.use(bodyParser.json());

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

app.use("/auth", usersRoutes);
