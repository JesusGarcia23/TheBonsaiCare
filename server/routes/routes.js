const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bonsaiController = require('../controllers/bonsaiController');
const userController = require('../controllers/userController');

const uploader = require('../config/cloudinary-setup');

// AUTHORIZATION ROUTES
router.post('/signup', authController.signUp);
router.post('/login', authController.logInUser);
router.get('/loggedin', authController.loggedIn);
router.delete('/logout', authController.logOut);
router.post('/careSignup', authController.careSignUp);


// USER ACTION ROUTES
router.post('/uploadNewImg', uploader.single('imageUrl'), userController.uploadImage);
router.post('/deleteCloudImg', userController.deleteCloudImg);
router.post('/newBonsai', bonsaiController.createBonsai);
router.get('/searchCare', userController.searchCarer);

router.get('/carerProfile/:id', userController.carerProfile);

module.exports = router