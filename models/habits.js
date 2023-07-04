const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    category : {
        type : String,
        required : true,
        enum : ["Physical", "Mental", "Career"]
    },
    entries : [{
        type : mongoose.Schema.Types.Mixed
    }]

})

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;