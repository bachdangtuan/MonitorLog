"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhysicalMachine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Projects }) {
      // define association here  máy vật lý thì có nhiều dự án
      this.hasMany(Projects, {
        foreignKey: "PhysicalMachine",
        as: "phymanchine",
      });
    }
  }

  PhysicalMachine.init(
    {
      ipadress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      service: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      belongtoCompany: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      provider: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ram: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpu: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      disk: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type_machine: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "PhysicalMachine",
    }
  );
  return PhysicalMachine;
};
