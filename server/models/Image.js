const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    
    publicId: {
        type: String
    },

    imageUrl: {
        type: String, 
        required: true 
    }
})

module.exports = mongoose.model("Image", imageSchema);
