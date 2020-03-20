const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    requester: {
        type: Schema.Types.ObjectId, ref="User"
    },
    carer: {
        type: Schema.Types.ObjectId, ref="User"
    },
    startDate: Date,
    finishDate: Date,
    preferedTimeToArrive: String,
    treeQuantity: Number,
    message: String,

})

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;