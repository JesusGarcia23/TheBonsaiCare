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
    zipcode: {
        type: String,
        required: true
    },
    profileImg:{
        type: String
    },
    rate: {
        type: Number
    },
    bonsais: [{type: Schema.Types.ObjectId, ref: "Bonsai"}]

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);
module.exports = User