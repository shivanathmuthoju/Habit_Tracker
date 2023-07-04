const User = require('../models/user');
const Habit = require('../models/habits');
const date = require('date-fns')

module.exports.home = async (req, res) => { // sends the user habits and the dates for the last seven days
    let user = await User.findById(req.user._id).populate('habits');
    let today = new Date;
    let dates = []
     for(let i=6; i>=0; i--) {
        dates.push(date.format(new Date((date.subDays(today, i))), "MM-dd-yyyy"))
    }

    return res.render('dashboard.ejs', {user : user, dates : dates});

}
// sign out
module.exports.signOut = (req, res) => {
    return res.redirect('/');
}
// adds habit
module.exports.addHabit = async (req, res) => {
    
    let habit = await Habit.create({
        name : req.body.habitName,
        category : req.body.habitCategory,
        user : req.user._id
    });

    let user = await User.findById(req.user._id);
    await user.habits.push(habit._id);
    await user.save(); 

    return res.redirect('back');
}
// get status of the day
module.exports.getDayStatus = async(req, res) => {
    
    let habit = await Habit.findById(req.params.id)
    let entries = habit.entries;
    let status = await entries.filter(entry => entry.date == req.query.date);
    
    res.status(200).json(status)
}

//update status

module.exports.updateHabitStatus = async (req, res) => {
    
    let habit = await Habit.findById(req.params.id);
    let date = req.query.date;
    let statusUpdate = req.query.status;
    let isHabitPresent = habit.entries.find((entry) => entry.date == date);
    if(isHabitPresent != undefined) {
        await habit.entries.remove(isHabitPresent);
        await habit.save();
        let status = {
            date : date,
            status : statusUpdate
        }
        
        await habit.entries.push(status);
        await habit.save();
    }
    else {
        let status = {
            date : date,
            status : statusUpdate
        }
        
        await habit.entries.push(status);
        await habit.save();
    }
    console.log(habit, "updated")
    res.status(200).json({
        "message" : "updated"
    })
};

//delete habit 

module.exports.deleteHabit = async(req, res) => {
    await Habit.findByIdAndDelete(req.query.id);
    res.status(200).json({
        message : "Deleted Habit"
    })
}