const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
    textInput: {
        typeof: String,
        required: true
    },
    numInput: {
        typeof: Number,
        required: true
    },
    date: {
        typeof: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('itemList',itemListSchema, 'items')