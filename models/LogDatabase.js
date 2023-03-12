const mongoose = require('mongoose');

const LogDatabaseSchema = new mongoose.Schema({
    ip: String,
    hostName: String,
    addressIP: String,
    status: String,
    nameFileBackup: String,
    rangeTimeBackup: String,
    timestamp: {type: Date, default: Date.now}
})

const LogDatabase = mongoose.model('LogDatabase', LogDatabaseSchema, 'LogDatabase')
module.exports = {
    LogDatabaseSchema, LogDatabase
}
