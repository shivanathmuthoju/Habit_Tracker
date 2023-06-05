// connecting database

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/habit_tracker");

const db = mongoose.connection;

db.once('open', () => console.log("Connected to Database!!"))

module.exports = db;