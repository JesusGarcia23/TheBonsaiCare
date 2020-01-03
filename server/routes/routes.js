const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bonsaiController = require('../controllers/bonsaiController');
const userController = require('../controllers/userController');

// AUTHORIZATION ROUTES
router.post('/signup', authController.signUp);
router.post('/login', authController.logInUser);
router.get('/loggedin', authController.loggedIn);
router.delete('/logout', authController.logOut);

// USER ACTION ROUTES
//router.post('/uploadNewImg', uploader.single('imageUrl'), userController.uploadImage);
router.post('/newBonsai', bonsaiController.createBonsai);

module.exports = router