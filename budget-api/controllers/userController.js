const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  signup: async function (req, res, next) {
    const salt = await bcrypt.genSalt(10);
    try {
      await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
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
