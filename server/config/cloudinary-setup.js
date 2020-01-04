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
        console.log(file) // file.originalname is what we need

        //WITH NO FILENAME AS SECOND PARAMETER, IT GENERATES ONE RANDOMLY
        cb(null);
    }
});

const uploader = multer({ storage });
module.exports = uploader;
