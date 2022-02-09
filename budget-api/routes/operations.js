const express = require("express");
const req = require("express/lib/request");
const routes = express.Router();
const operationController = require("../controllers/operationController");

routes.get("/user/:id", operationController.getAll);
routes.get("/:id", operationController.getById);
routes.post(
  "/",
  (req, res, next) => {
    req.app.validateUser(req, res, next);
  },
  operationController.save,
);
routes.put("/", operationController.update);
routes.delete("/:id", operationController.delete);

module.exports = routes;
