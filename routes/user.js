const express = require("express");
const router = express.Router();

const userController = require('../controllers/profileController');
const passport = require('../config/passport-local');


// profile 
router.get('/',
    passport.checkAuthentication,
    profileController.home
);
