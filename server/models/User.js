const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city:{
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    zipcode: {
        type: String,
        default: null
    },
    profileImg:{
        type: String,
        default: null
    },
    bonsais: [{type: Schema.Types.ObjectId, ref: "Bonsai"}],
    careProfile: {
        type: Boolean,
        default: false
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
    quotes: [{
        type: Schema.Types.ObjectId, ref: "Quote"
    }],
    daysNoAvailable: [Date],
    sizePreference: [String],
    listOfTrees: [String],
    rating: [{
        type: Number,
        default: 0
    }],
    reviews: [{
        user: String,
        comment: String
    }]

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User