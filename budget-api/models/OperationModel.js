const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Category = require("./categoryModel");
const User = require("./userModel");

class Operation extends Model {}
Operation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "operations" },
);

Operation.Category = Operation.belongsTo(Category);
Operation.User = Operation.belongsTo(User);

module.exports = Operation;
