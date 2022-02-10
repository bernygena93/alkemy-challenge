const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signup: async function (req, res, next) {
    const salt = await bcrypt.genSalt(10);
    try {
      const user = await userModel.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        await userModel.create({
          username: req.body.username,
          email: req.body.email,
          password: await bcrypt.hash(req.body.password, salt),
        });
        res.status(201).json({ status: "Ok" });
      } else res.status(400).json({ error: "el email ingresado ya existe" });
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
        const validation = await bcrypt.compare(
          req.body.password,
          user.password,
        );
        if (validation) {
          const token = jwt.sign(
            { id: user.id, email: user.email, username: user.username },
            req.app.get("secretKey"),
          );
          res.status(200).json({
            token,
            user: {
              id: user.id,
              email: user.email,
              username: user.username,
            },
          });
        } else {
          console.log("el email ingresado no es valido");
        }
      } else {
        console.log("la contraseña ingresada no es valida");
      }
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
