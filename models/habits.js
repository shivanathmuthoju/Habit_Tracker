const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
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