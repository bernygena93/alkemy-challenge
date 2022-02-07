const operationModel = require("../models/operationModel");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const operations = await operationModel.findAll({
        where: { userId: req.params.id },
        order: [["date", "DESC"]],
        limit: 10,
        include: [
          {
            association: operationModel.Category,
          },
        ],
      });
      res.status(200).json(operations);
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },
  getById: async function (req, res, next) {
    try {
      const operation = await operationModel.findByPk(req.params.id, {
        include: [
          {
            association: operationModel.Category,
          },
        ],
      });
      res.status(200).json(operation);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  save: async function (req, res, next) {
    try {
      await operationModel.create({
        concept: req.body.concept,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      });
      res.status(201).json({ status: "Ok" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  update: async function (req, res, next) {
    try {
      await operationModel.update(
        {
          concept: req.body.concept,
          amount: req.bodyamount,
          date: req.body.date,
          type: req.body.type,
          categoryId: req.body.categoryId,
          userId: req.body.userId,
        },
        {
          where: {
            id: req.body.id,
          },
        },
      );
      res.status(200).json({ status: "Ok" });
    } catch (e) {
      res.status(400).json({ error: err });
    }
  },
  delete: async function (req, res, next) {
    try {
      await operationModel.destroy({ where: { id: req.params.id } });
      res.status(200).json({ status: "Ok" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
