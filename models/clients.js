const mongoose = require('mongoose')
const clientListSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    clientPhone: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('clientList', clientListSchema, 'clients')