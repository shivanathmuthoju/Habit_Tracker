const User = require('../models/user');
const Habit = require('../models/habits');

module.exports.home = async (req, res) => {
    let user = await User.findById(req.user._id).populate('habits');
    console.log(user)
    return res.render('dashboard.ejs', {user : user});

}

module.exports.signOut = (req, res) => {
    return res.redirect('/');
}

module.exports.addHabit = async (req, res) => {
    console.log(req.body);
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