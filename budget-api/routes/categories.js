const express = require("express");
const routes = express.Router();
const categoryController = require("../controllers/categoryController");

routes.get("/:id", categoryController.getAll);
routes.post("/", categoryController.save);
routes.put("/", categoryController.update);
routes.delete("/", categoryController.delete);

module.exports = routes;
