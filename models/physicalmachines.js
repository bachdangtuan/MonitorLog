"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class physicalmachines extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({projects, virtualmachines}) {
            // define association here  máy vật lý thì có nhiều dự án
            this.hasMany(virtualmachines, {
              foreignKey: "belongtoPhysicalMachine",
              as: "listVirtualMachine",
            });
            //
            this.belongsTo(projects, {foreignKey: 'belongtoCompany', as: 'listPhysicalMachine'});
        }
    }

    physicalmachines.init(
      {
        namePhysicalMachine: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        ipadress: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        type_machine: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        service: {
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
      },
      {
        sequelize,
        modelName: "physicalmachines",
      }
    );
    return physicalmachines;
};
