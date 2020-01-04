const mongoose = require('mongoose');

const Schema = mongoose.Schema

const careUserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    skills: {
        type: String,
        enum: ["Trimming", "Fertilizer", "Insect control", "Repotting", "Wiring"]
    },
    pendingCare: {
        type: Schema.Types.ObjectId, ref: "Care"
    },
    comingCare: {
        type: Schema.Types.ObjectId, ref: "Care"
    },
    services: [{type:  Schema.Types.ObjectId, ref: "Service"}],

})

const CareUser = mongoose.model("CareUser", careUserSchema)

module.exports = CareUser