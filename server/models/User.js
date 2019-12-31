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
    rate: {
        type: Number,
        default: 0
    },
    bonsais: [{type: Schema.Types.ObjectId, ref: "Bonsai"}],
    careProfile: {
        type: Schema.Types.ObjectId, ref: "CareUser",
        default: null
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User