const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const careUserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    services: {
        type: [String],
        enum: [ "DropinVisit", "Boarding", "Trimming", "Fertilizer", "Insect control", "Repotting", "Wiring"]
    },
    fees: 
        {
         boarding: { type: Number, default: 0},
         maintenance: {type: Number, default: 0}  
        }
    ,
    pendingCare: [{
        type: Schema.Types.ObjectId, ref: "Care"
    }],
    comingCare: [{
        type: Schema.Types.ObjectId, ref: "Care"
    }],
    pastCare: [{
        type: Schema.Types.ObjectId, ref: "Care"
    }],
});

const CareUser = mongoose.model("CareUser", careUserSchema);

module.exports = CareUser;