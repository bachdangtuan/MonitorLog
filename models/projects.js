"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Projects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({PhysicalMachine}) {
            // this.belongsTo(PhysicalMachine, {foreignKey: 'physicalMachineId', as: 'phymanchine'});
        }
    }

    Projects.init(
        {
            nameCompany: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            introduction: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            phoneNumber: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            avatar: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Projects",
        }
    );
    return Projects;
};
