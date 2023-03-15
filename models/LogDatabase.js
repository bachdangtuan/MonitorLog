const mongoose = require("mongoose");

const LogDatabaseSchema = new mongoose.Schema({
  id: String,
  ipServer: String,
  hostName: String,
  pathBackup: String,
  status: String,
  osSystems: String,
  capacityFile: String,
  DateBackup: String,
  TimeBackup: String,
  nameDatabase: String,
  status: String,
});

const LogDatabase = mongoose.model(
  "LogDatabase",
  LogDatabaseSchema,
  "LogDatabase"
);
module.exports = {
  LogDatabaseSchema,
  LogDatabase,
};
