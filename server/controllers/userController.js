const Bonsai = require('../models/Bonsai');
const Image = require('../models/Image');
const cloudinary = require('cloudinary');
const session = require('express-session');
const User = require('../models/User');
const CareUser = require('../models/CareUser');

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
    },

    searchCarer(req, res) {
        console.log(req.query);
    },

    createCareAccount(req, res) {
        
    },

    carerProfile(req, res) {
        const {id} = req.params;
        CareUser.findById(id)
        .then(theUser => {
            console.log(theUser)
        }).catch(err => {
            console.error(err);
        })
    }


}