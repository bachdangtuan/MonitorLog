"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class VirtualMachine extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({PhysicalMachine, ServiceContainer}) {
            // define association here 1 station thì có nhiều chuyến đi
            this.hasMany(PhysicalMachine, {foreignKey: 'virtualMachineId', as: 'virmanchine'});
            this.belongsTo(ServiceContainer, {foreignKey: 'serviceContainerId', as: 'servicecontainer'});
        }
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
        },
        {
            sequelize,
            modelName: "VirtualMachine",
        }
    );
    return VirtualMachine;
};
