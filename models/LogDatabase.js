const mongoose = require('mongoose');

const LogDatabaseSchema = new mongoose.Schema({
    ip: String,
    method: String,
    url: String,
    status: String,
    logtype: String,
    geoIP: geoIP,
    responseTime: String,
    timestamp: {type: Date, default: Date.now}
})

const LogDatabase = mongoose.model('LogDatabase', LogDatabaseSchema, 'LogDatabase')
module.exports = {
    LogDatabaseSchema, LogDatabase
}
