"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class servicecontainers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ virtualmachines }) {
      this.belongsTo(virtualmachines, {
        foreignKey: "belongtoVirtualMachine",
        as: "belongVirtualMachine",
      });
    }
  }

  servicecontainers.init(
    {
      nameServiceContainer: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpu: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ram: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ipaddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "servicecontainers",
    }
  );
  return servicecontainers;
};
