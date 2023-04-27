"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceContainers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({VirtualMachines}) {
        this.belongsTo(VirtualMachines, {foreignKey: 'belongtoVirtualMachine', as: 'belongVirtualMachine'});
    }
  }

  ServiceContainers.init(
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
      modelName: "ServiceContainers",
    }
  );
  return ServiceContainers;
};
