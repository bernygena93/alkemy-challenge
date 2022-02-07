const express = require("express");
const routes = express.Router();
const operationController = require("../controllers/operationController");

routes.get("/user/:id", operationController.getAll);
routes.get("/:id", operationController.getById);
routes.post("/", operationController.save);
routes.put("/", operationController.update);
routes.delete("/:id", operationController.delete);

module.exports = routes;
