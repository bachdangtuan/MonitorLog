"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VirtualMachine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({Trips}) {
    //     // define association here 1 station thì có nhiều chuyến đi
    //     this.hasMany(Trips, {foreignKey: 'fromStation', as: 'from'});
    //     this.hasMany(Trips, {foreignKey: 'toStation', as: 'to'});
    // }
  }

  VirtualMachine.init(
    {
      nameVirtualMachine: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ipaddress: {
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
      disk: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    //   classPhysicalMachine: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "Stations",
    //       key: "id",
    //     },
    //   },
    },
    {
      sequelize,
      modelName: "VirtualMachine",
    }
  );
  return VirtualMachine;
};
