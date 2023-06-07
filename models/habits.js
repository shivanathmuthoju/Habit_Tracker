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
        // date : {
        //     type : mongoose.Schema.Types.Date
        // },
        // status : {
        //     type : String,
        //     default : 'None',
        //     enum : ['Done', 'Not Done', 'None']
        // }
        type : mongoose.Schema.Types.Mixed
    }]

})

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;