const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/habit_tracker')

const db = mongoose.connection;

db.once('open', () => console.log("Successfully connected to db"));

module.exports = db;