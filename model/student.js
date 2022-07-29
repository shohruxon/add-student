const { Schema, model } = require('mongoose')

module.exports = model('student', new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    group: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
   
}))

