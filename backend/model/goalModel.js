const mongoose = require('mongoose')
mongoose.pluralize(null)

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('testColl', goalSchema)