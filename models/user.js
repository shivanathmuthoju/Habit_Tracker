const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    habits : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "habits"
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;