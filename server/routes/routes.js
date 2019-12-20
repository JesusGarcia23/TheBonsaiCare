const express = require('express')
const router = express.Router();
const testController = require('../controllers/testController')
const userController = require('../controllers/userController')

router.get('/sayHi', testController.sayHi)
router.post('/signup', userController.signUp)

module.exports = router