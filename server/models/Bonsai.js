const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bonsaiSchema = new Schema({
    bonsaiImg: { type: Schema.Types.ObjectId, ref:'Image'},
    description: Number
},{
    timestamps: true
})

const Bonsai = mongoose.model('Bonsai', bonsaiSchema)

module.exports = Bonsai

//bonsai-care/mE.jpg