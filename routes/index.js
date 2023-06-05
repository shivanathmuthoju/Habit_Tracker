const express = require('express');
const router = express.Router();

const signInController = require('../controllers/signinController');
const signUpController = require('../controllers/signupController');

router.get('/', (req, res) => {
    res.redirect('/signin')
})

// render signin page

router.get('/signin', signInController.signin);

// render signup page

router.get('/signup', signUpController.signup)

module.exports = router;