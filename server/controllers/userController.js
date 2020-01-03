const Bonsai = require('../models/Bonsai');
const Image = require('../models/Image');

module.exports = {
    
    uploadImage(req, res) {
        console.log("UploadImage was called!")
        console.log(req.body.imageUrl)
        if(!req.body) {
            next(new Error('No file uploaded!'));
            return;
        }
        try {
            // await Image.create({

            // })
        }catch(err) {
            res.json({message: err})
        }
    },


}