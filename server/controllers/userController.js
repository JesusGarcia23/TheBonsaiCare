const Bonsai = require('../models/Bonsai');
const Image = require('../models/Image');
const cloudinary = require('cloudinary');
const session = require('express-session')

module.exports = {
    
  async  uploadImage(req, res, next) {

        if(!req.file) {
            next(new Error('No file uploaded!'));
            return;
        }
        try {
            const { public_id, secure_url } = req.file
            await Image.create({
                owner: req.user.email,
                publicId: public_id,
                imageUrl: secure_url
            }).then(theImage => {
                res.json(theImage);
            }).catch(err => {
                console.error(err)
            })

        }catch(err) {
            res.json({message: err})
        }
    },

    deleteCloudImg(req, res) {
        const { publicId } = req.body

        Image.findOne
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if(error) console.error(`Something wen trong!`, error)
            else console.log(result)
        })
    }


}