"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceContainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({VirtualMachine}) {
        // define association here 1 station thì có nhiều chuyến đi
        this.belongsTo(VirtualMachine, {foreignKey: 'belongtoVirtualMachine', as: 'belongVirtualMachine'});
    }
  }

  ServiceContainer.init(
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
      modelName: "ServiceContainer",
    }
  );
  return ServiceContainer;
};
