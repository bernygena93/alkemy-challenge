const categoryModel = require("../models/categoryModel");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const categories = await categoryModel.findAll({
        where: { userId: req.params.id },
      });
      res.status(200).json(categories);
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },
  getById: async function (req, res, next) {
    try {
      const category = await categoryModel.findByPk(req.params.id);
      res.status(200).json(category);
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },

  save: async (req, res, next) => {
    try {
      const category = await categoryModel.create({
        name: req.body.name,
        type: req.body.type,
        userId: req.body.userId,
      });
      res.status(201).json({ status: "Ok", category });
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },
  update: async function (req, res, next) {
    try {
      await categoryModel.update(
        {
          name: req.body.name,
          type: req.body.type,
          userId: req.body.userId,
        },
        {
          where: {
            id: req.body.id,
          },
        },
      );
      res.status(200).json({ status: "Ok" });
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },
  delete: async function (req, res, next) {
    try {
      await categoryModel.destroy({ where: { id: req.params.id } });
      res.status(200).json({ status: "Ok" });
    } catch (err) {
      res.status(400).res.json({ error: err });
    }
  },
};
