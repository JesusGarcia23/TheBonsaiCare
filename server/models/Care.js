const mongoose = require('mongoose');

const Schema = mongoose.Schema

const careSchema = new Schema({
    provider: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    client: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    startDay: {
        type: Date
    },
    lastDay: {
        type: Date
    },


})

const Care = mongoose.model("Care", careSchema)

module.exports = Care