"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class virtualmachines extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({physicalmachines, servicecontainers}) {
            // define association here 1 station thì có nhiều chuyến đi
            this.hasMany(servicecontainers, {
              foreignKey: "belongtoVirtualMachine",
              as: "belongVirtualMachine",
            });
            this.belongsTo(physicalmachines, {
              foreignKey: "belongtoPhysicalMachine",
              as: "listVirtualMachine",
            });
        }
    }

    virtualmachines.init(
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
        usedram: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        disk: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        diskused: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "virtualmachines",
      }
    );
    return virtualmachines;
};
