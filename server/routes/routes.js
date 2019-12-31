const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bonsaiController = require('../controllers/bonsaiController');

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.get('/loggedin', userController.loggedIn);
router.delete('/logout', userController.logOut);
router.post('/newBonsai', bonsaiController.createBonsai);

module.exports = router