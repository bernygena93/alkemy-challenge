const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./database/db");

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), async () => {
  console.log(`app listening on port ${app.get("port")}!`);
  try {
    await sequelize.sync({ force: false });
    console.log("Connection success");
  } catch (err) {
    console.log("Connection falied", err);
  }
});
