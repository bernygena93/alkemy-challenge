const express = require("express");
const app = express();
require("dotenv").config();
const sequelize = require("./database/db");
const bodyParser = require("body-parser");

app.set("port", process.env.PORT || 8080);
app.set("secretKey", process.env.SECRET_KEY);

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
const categoriesRoutes = require("./routes/categories");
const operationsRoutes = require("./routes/operations");

app.use("/auth", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/operations", operationsRoutes);

function validateUser(req, res, next) {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (err, decoded) {
      if (err) {
        res.status(401).json({ message: err.message });
      } else {
        console.log(decoded);
        req.body.tokenData = decoded;
        next();
      }
    },
  );
}
app.validateUser = validateUser;
