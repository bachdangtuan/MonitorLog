"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class projects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({physicalmachines}) {
            this.hasMany(physicalmachines, {
              foreignKey: "belongtoCompany",
              as: "listPhysicalMachine",
            });
        }
    }

    projects.init(
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
        modelName: "projects",
      }
    );
    return projects;
};
