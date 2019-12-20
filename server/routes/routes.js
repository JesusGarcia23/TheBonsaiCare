const express = require('express')
const router = express.Router();
const testController = require('../controllers/testController')
const userController = require('../controllers/userController')

router.get('/sayHi', testController.sayHi)
router.post('/signup', userController.signUp)
router.post('/login', userController.logIn)
router.get('/loggedin', userController.loggedIn)
router.delete('/logout', userController.logOut)
module.exports = router