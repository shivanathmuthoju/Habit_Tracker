const express = require('express');
const router = express.Router();

const signInController = require('../controllers/signinController');
const signUpController = require('../controllers/signupController');

const passport = require('../config/passport-local');


router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect('/habits')
    }
    return res.redirect('/signin')
})

// render signin page

router.get('/signin', signInController.signin);

//login user

router.post('/signin', 
    passport.authenticate(
        'local',
        {failureRedirect : '/signin'}
    ),
signInController.loginUser)

// render signup page

router.get('/signup', signUpController.signup)

// signup user

router.post('/signup', signUpController.createUser);



module.exports = router;