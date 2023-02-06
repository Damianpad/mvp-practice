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

module.expors = mongoose.model('clientList', clientListSchema, 'clients')