const express = require("express");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`app listening on port ${app.get("port")}!`);
});
