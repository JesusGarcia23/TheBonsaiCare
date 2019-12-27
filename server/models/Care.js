const mongoose = require('mongoose');

const Schema = mongoose.Schema

const careSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    pendingCare: {
        type: Schema.Types.ObjectId, ref: "Care"
    },
    comingCare: {
        type: Schema.Types.ObjectId, ref: "Care"
    },

})

const Care = mongoose.model("Care", careSchema)

module.exports = Care