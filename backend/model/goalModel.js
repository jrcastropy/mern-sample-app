const mongoose = require('mongoose')
mongoose.pluralize(null)

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value'],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('testColl', goalSchema)