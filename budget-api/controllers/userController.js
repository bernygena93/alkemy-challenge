const userModel = require("../models/userModel");

module.exports = {
  signup: async function (req, res, next) {
    try {
      await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(201).json({ status: "Ok" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  signin: async function (req, res, next) {
    try {
      const user = await userModel.findOne({
        where: { email: req.body.email },
      });
      if (user) {
        res.status(200).json({
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
          },
        });
      } else {
        console.log("el email ingresado no es valido");
      }
    } catch (err) {
      res.status(400).json({ error: "la contraseña ingresada no es valida" });
    }
  },
};
