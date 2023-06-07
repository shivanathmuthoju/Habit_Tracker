const express = require('express');
const router = express.Router();
const passport = require('../config/passport-local');
const habitController = require('../controllers/habitController');
const { profile } = require('console');

//go to dashboard
router.get('/',
    passport.checkAuthentication,
    habitController.home
);

//signout

router.get('/signout',
    passport.destroySession,
    habitController.signOut
);


router.post('/addHabit', habitController.addHabit);


module.exports = router;