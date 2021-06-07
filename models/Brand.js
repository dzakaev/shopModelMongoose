const { Schema, model } = require('mongoose');


const schema = new Schema ({
    name: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
})

const brands = model('brand', schema)

module.exports = brands