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

// adding habit
router.post('/addHabit', habitController.addHabit);

//get status id
router.get('/status/:id', habitController.getDayStatus);

//update details
router.post('/updateStatus/:id', habitController.updateHabitStatus);

//delete habit

router.delete('/delete', habitController.deleteHabit);


module.exports = router;