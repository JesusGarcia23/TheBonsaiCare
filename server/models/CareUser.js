const mongoose = require('mongoose');

const Schema = mongoose.Schema

const careUserSchema = new Schema({
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

const CareUser = mongoose.model("CareUser", careUserSchema)

module.exports = CareUser