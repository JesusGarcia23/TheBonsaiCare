const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bonsaiSchema = new Schema({
    type: String,
    description: Number
},{
    timestamps: true
})

const Bonsai = mongoose.model('Bonsai', bonsaiSchema)

module.exports = Bonsai