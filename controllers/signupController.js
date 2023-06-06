const User = require('../models/user')

module.exports.signup = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/habits');
    }
    res.render('signup.ejs')
}

module.exports.createUser = async (req, res) => {
    //check if user exists

    let user = await User.find({email : req.body.email})
    if(user.length > 0)  {
        //if exits
        console.log("User already exists");
        return res.redirect('/signin');
    }
    else {

        if(req.body.password != req.body.confirmPassword){
            console.log("Password and Confirm Password must be the same");
            return res.redirect('back')
        }
        await User.create({
            email : req.body.email,
            password : req.body.password
        })

        return res.render('welcome.ejs');
    }
}