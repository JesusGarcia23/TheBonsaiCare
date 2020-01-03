const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
// const cloudinary = require('cloudinary').v2;

const uploader = require('../config/cloudinary-setup');
// uploader.single("imageUrl")
router.post('/uploadNewImg', uploader.single("imageUrl"), async (req, res, next) => {
    console.log("THIS IS THE ROUTE")
    console.log(req.body)
    console.log(req.file)

})

module.exports = router
