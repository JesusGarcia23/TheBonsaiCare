const Bonsai = require('../models/Bonsai');
const Image = require('../models/Image');
const cloudinary = require('cloudinary');

module.exports = {
    
  async  uploadImage(req, res) {
        if(!req.file) {
            next(new Error('No file uploaded!'));
            return;
        }
        try {
            const { public_id, secure_url } = req.file

            await Image.create({
                publicId: public_id,
                imageUrl: secure_url
            }).then(theImage => {

            }).catch(err => {
                console.error(err)
            })

        }catch(err) {
            res.json({message: err})
        }
    },

    deleteCloudImg(req, res) {
        const { publicId } = req.body
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if(error) next(new Error(`Something wen trong!`, error))
            console.log(result)
        })
    }


}