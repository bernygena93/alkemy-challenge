const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./userModel.js");

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "categories" },
);

Category.User = Category.belongsTo(User);

module.exports = Category;
