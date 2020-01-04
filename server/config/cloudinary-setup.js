const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

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
        console.log("HERE IS THE FILENAME");
        console.log(file.originalname)
        file.originalname = "test1.jpg"
        cb(null, file.originalname);
    }
});

const uploader = multer({ storage });
module.exports = uploader;
