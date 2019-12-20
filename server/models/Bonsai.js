const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bonsaiSchema = new Schema({
    type: String,
    age: Number
},{
    timestamps: true
})

const Bonsai = mongoose.model('Bonsai', bonsaiSchema)

module.exports = Bonsai