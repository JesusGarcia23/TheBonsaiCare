const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
const Image = require('../models/Image');

cloudinary.config({
    cloud_name: process.env.cloudName,
    api_key: process.env.cloudKey,
    api_secret: process.env.cloudSecret
});

var storage = cloudinaryStorage({
    cloudinary,
    folder: 'bonsai-care',
    allowedFormats: ['jpg', 'png'],

    filename: function (req, file, cb) {

        const time = new Date();
        const imageName = `bonsai-care/${file.originalname}${req.user.firstName}${time}`

        //Check if duplicates
        const imageArray = Image.find({publicId: imageName})
        console.log(imageArray);

        //WITH NO FILENAME AS SECOND PARAMETER, IT GENERATES ONE RANDOMLY
        cb(null, imageName);
    }
});

const uploader = multer({ storage });
module.exports = uploader;
