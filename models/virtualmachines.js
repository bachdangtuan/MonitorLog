"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class VirtualMachines extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({PhysicalMachines, ServiceContainers}) {
            // define association here 1 station thì có nhiều chuyến đi
            this.hasMany(ServiceContainers, {foreignKey: 'belongtoVirtualMachine', as: 'belongVirtualMachine'});
            this.belongsTo(PhysicalMachines, {foreignKey: 'belongtoPhysicalMachine', as: 'belongPhysicalMachine'});
        }
    }

    VirtualMachines.init(
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
        },
        {
            sequelize,
            modelName: "VirtualMachines",
        }
    );
    return VirtualMachines;
};
